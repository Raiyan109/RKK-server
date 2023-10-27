const express = require('express');
const { createCourse, getCourses, getCourse } = require('../controllers/courseController');


const router = express.Router()


// POST
router.post('/', createCourse)

// GET all
router.get('/', getCourses)

// GET a single course
router.get('/:id', getCourse)




module.exports = router;