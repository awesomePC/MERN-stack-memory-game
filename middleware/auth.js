const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token, return err msg if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // get secret from config
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // store in user variable
    req.user = decoded.user;
    next();
    // return err msg
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};
