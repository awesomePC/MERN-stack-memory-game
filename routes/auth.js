const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('get a logged in user')
})

// @route   POST api/auth
// @desc    Authorize user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user')
});

module.exports = router;