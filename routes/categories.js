const express = require('express');
const { createCategory, getCategories, deleteCategory } = require('../controllers/categoryController.js')

const router = express.Router()


// routes
// GET
router.get('/', getCategories)

// POST
router.post('/', createCategory)

// DELETE
router.delete('/:id', deleteCategory)





module.exports = router

