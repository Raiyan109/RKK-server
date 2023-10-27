const Category = require('../models/categoryModel.js')

// POST || Create
const createCategory = async (req, res) => {
    const { name } = req.body

    try {
        const category = await (await Category.create({ name })).populate('courses')
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
    const categories = await Category.find({}).populate('courses')
    res.status(200).json(categories)
}

// GET a single category
const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            return res.status(400).json({ msg: 'The category cannot found' })
        }
        res.status(200).json(category)
    } catch (error) {

    }
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


module.exports = { createCategory, getCategories, deleteCategory, getCategory }

