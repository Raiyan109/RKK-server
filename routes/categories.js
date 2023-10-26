const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController.js')

const router = express.Router()


// routes
router.get('/', getCategories)

router.post('/', createCategory)





module.exports = router

