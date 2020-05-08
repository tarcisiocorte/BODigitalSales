const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

//router.post();
router.post('/', (req, res) => {
  console.log('fazendo o post....');
  res.send('Post de test feito');
});

module.exports = router;
