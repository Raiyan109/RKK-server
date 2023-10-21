const express = require('express');
const { signup } = require('../controllers/userController');

const router = express.Router()

// Signup
router.post('/signup', signup)


module.exports = router;