const express = require('express');
const user = require('../controllers/user')
const router = express.Router();

router.post('/auth', user.auth);

router.post('/register', user.register);

module.exports = router;
