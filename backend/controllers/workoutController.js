const Workout = require('../models/workoutModel')

const mongoose = require('mongoose')
// get all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})   // Sort in descending order, so the newest one will be at the top
    // The live above will give us all the workout document in an array
    res.status(200).json(workouts)  // Sending back in json to the browser
}


// get a single workout
const getWorkout = async(req, res) => {
    const { id } = req.params       // Grab the id property from the request

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: "No such workout"})
        }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: "No such workout"})     // We have to return here since if not, it will carry on and run the rest of the code
    }
    
    res.status(200).json(workout)
}


// create a new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body    // Extract data

    // add doc to DB
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a workout
const deleteWorkout = async(req, res) => {
    // Grab the id from the route
    const { id } = req.params
    // Make sure that it is a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    // Try to delete that workout
    const workout = await Workout.findOneAndDelete({_id: id})
    // Do we have this workout?
    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }
    // If able to delete the workout
    res.status(200).json(workout)
}


// update a workout
const updateWorkout = async (req, res) => {
    // Grab the id from the route
    const { id } = req.params
    // Make sure that it is a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }
    // Try to update it
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    // Do we have this workout?
    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }
    // If able to delete the workout
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}