// Import Express library
const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
} = require('../controllers/workoutController')

// Creates an instance of an Express router. Routers are used to group related routes together.
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workouts
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE workout"})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a workout"})
})


// Exports the router so it can be used in other parts of the application.
module.exports = router
