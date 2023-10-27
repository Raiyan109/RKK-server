const Course = require('../models/courseModel.js')
const Category = require('../models/categoryModel.js')


// GET all Courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).populate('category')
    res.status(200).json(courses)
}

// GET single Course
const getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('category')
        if (!course) {
            return res.status(400).json({ msg: 'The course cannot found' })
        }
        res.status(200).json(course)
    } catch (error) {

    }
}

// Create a new Course
const createCourse = async (req, res) => {
    const { img, video, name, desc, category, length, chapters, price, isFree, rating, numReviews, dateCreated } = req.body

    try {
        const category = await Category.findById(req.body.category)
        if (!category) {
            return res.status(400).send('Invalid Category')
        }
        const course = await (await Course.create({ img, video, name, desc, category, length, chapters, price, isFree, rating, numReviews, dateCreated })).populate('category')
        if (!course) {
            return res.status(400).send({ msg: 'The course cannot be created' })
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Update a course


// Delete a course






module.exports = { createCourse, getCourses, getCourse }