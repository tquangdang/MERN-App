const mongoose = require('mongoose')    // Mongoose will allow us to create Schemas for data (Mongodb alone is Schemaless)

const Schema = mongoose.Schema


// What would a typical workout look like? The Schema will define the structure of it inside the database
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})


// Export the model for use in other parts of the program
module.exports = mongoose.model('Workout', workoutSchema)

