// Import Express library
const express = require('express')

const Workout = require('../models/workoutModel')
// Creates an instance of an Express router. Routers are used to group related routes together.
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// GET a single workouts
router.get('/:id', (req, res) => {

    res.json({mssg: "GET a single workout"})
})

// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body    // Extract data

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {

    }
    res.json({mssg: "POST a new workout"})
})

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
