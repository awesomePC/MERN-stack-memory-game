const mongoose = require('mongoose');

// Game schema for mongoDB Games database
const GameSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  gameLevel: {
    type: String,
  },
  numOfMoves: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('games', GameSchema);
