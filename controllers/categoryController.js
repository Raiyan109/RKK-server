const Category = require('../models/categoryModel.js')


const createCategory = async (req, res) => {
    const { name } = req.body

    try {
        const category = await Category.create({ name })
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCategories = async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json(categories)
}



module.exports = { createCategory, getCategories }

