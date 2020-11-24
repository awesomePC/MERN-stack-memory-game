const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please enter a name')
      .not()
      .isEmpty(),
    check('email', 'Please enter valid email')
      .isEmail(),
    check('password', 'Password must be 5 or more characters')
      .isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user){
        return res.status(400).json({ msg: 'Email already exists'});
      }

      user = User({ 
        name: name,
        email: email,
        password: password
      })

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload, 
        config.get('jwtSecret'), 
        {
          expiresIn: 3600
        }, 
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status('500').send('Server Error')
    }
  }
);

// @route   PUT api/users/:id
// @desc    Update a user
// @access  Private
router.put('/:id', (req, res) => {
  res.send('update a user')
});

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('delete a user')
});

module.exports = router;