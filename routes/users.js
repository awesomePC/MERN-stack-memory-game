const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('register a user')
});

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