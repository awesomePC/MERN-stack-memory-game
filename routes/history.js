const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Game = require('../models/Games');

// @route   GET api/history
// @desc    Retrieve user history
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const games = await Game.find({ user: req.user.id });
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/history
// @desc    Add user history
// @access  Private
router.post('/', auth, async (req, res) => {
  const { gameLevel, numOfMoves } = req.body;

  try {
    const newGame = new Game({
      gameLevel: gameLevel,
      numOfMoves: numOfMoves,
      user: req.user.id
    })

    const game = await newGame.save();

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route   DELETE api/history
// @desc    Delete user history
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    await Game.deleteMany({ user: req.user.id });

    res.json({ msg: 'Games Cleared' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;