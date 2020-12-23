const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  // declare user variable from database, except password
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
    // return error if found
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authorize user and get token
// @access  Public
router.post(
  '/',
  // check email and password are valid
  [
    check('email', 'please enter valid email').isEmail(),
    check('password', 'password is required').exists(),
  ],
  async (req, res) => {
    // declare errors array
    const errors = validationResult(req);
    // if errors found, return message
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // declare variables from request
    const { email, password } = req.body;

    try {
      // find user in database, return err msg if not found
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      // check passwords match, return err msg if not
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      // declare variable with user info
      const payload = {
        user: {
          id: user.id,
        },
      };

      // sign user in, sign ou after 1 hour
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // return err msg if found
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
