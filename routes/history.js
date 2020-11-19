const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/history
// @desc    Retrieve user history
// @access  Private
router.get('/', (req, res) => {
  res.send('get user history')
});

// @route   POST api/history
// @desc    Add user history
// @access  Private
router.post('/', (req, res) => {
  res.send('add user history')
});

// @route   DELETE api/history/:id
// @desc    Delete user history
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('delete user history')
});

module.exports = router;