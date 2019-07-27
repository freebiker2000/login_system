const express = require('express');
const router = express.Router();

// User model
const User = require('../../models/User.schema');

router.get('/', (req, res) => {
  res.send('register')
});

module.exports = router;