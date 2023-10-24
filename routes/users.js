const express = require('express');
const { signup, testController, login } = require('../controllers/userController');
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router()


// Test controller
router.get('/test', requireSignIn, isAdmin, testController)

// Protected User Route 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ ok: true })
})
// Protected Admin Route 
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).json({ ok: true })
})

// Signup
router.post('/signup', signup)

// Login
router.post('/login', login)


module.exports = router;