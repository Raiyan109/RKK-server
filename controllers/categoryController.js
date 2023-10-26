const Category = require('../models/categoryModel.js')

// POST || Create
const createCategory = async (req, res) => {
    const { name } = req.body

    try {
        const category = await Category.create({ name })
        if (!category) {
            return res.status(400).send({ msg: 'The category cannot be created' })
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET all categories
const getCategories = async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json(categories)
}


// DELETE a category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id)
        if (!category) {
            return res.status(400).json({ msg: 'The category cannot be deleted' })
        }
        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
            category
        })
    } catch (error) {
        res.status(400).json({ error: 'Error from catch ' + error.message })
    }
}


module.exports = { createCategory, getCategories, deleteCategory }

