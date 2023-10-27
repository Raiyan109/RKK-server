const express = require('express');
const { createCategory, getCategories, deleteCategory, getCategory } = require('../controllers/categoryController.js')

const router = express.Router()


// routes
// GET
router.get('/', getCategories)

// GET a single category
router.get('/:id', getCategory)

// POST
router.post('/', createCategory)

// DELETE
router.delete('/:id', deleteCategory)





module.exports = router

