const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Game = require('../models/Games');

// @route   GET api/history
// @desc    Retrieve user history
// @access  Private
router.get('/', auth, async (req, res) => {
  // declare games variable from database and json variable
  try {
    const games = await Game.find({ user: req.user.id });
    res.json(games);
    // return error if found
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/history
// @desc    Add user history
// @access  Private
router.post('/', auth, async (req, res) => {
  // declare variables from request
  const { gameLevel, numOfMoves } = req.body;

  // declare newGame model with request info
  try {
    const newGame = new Game({
      gameLevel: gameLevel,
      numOfMoves: numOfMoves,
      user: req.user.id,
    });

    // save new game to database and return json
    const game = await newGame.save();
    res.json(game);
    // return error if found
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// // @route   DELETE api/history
// // @desc    Delete user history
// // @access  Private
// router.delete('/', auth, async (req, res) => {
//   try {
//     await Game.deleteMany({ user: req.user.id });

//     res.json({ msg: 'Games Cleared' });

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
