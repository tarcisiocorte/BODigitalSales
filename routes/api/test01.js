const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');


//router.post();
router.post('/', [  
  check('name').isEmpty(),
  //check('email').isEmail(),
  check('password').not().isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // User.create({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.name
  // }).then(user => res.json(user));
});

module.exports = router;
