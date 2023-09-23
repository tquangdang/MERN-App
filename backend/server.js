// Nodemon will automatically restarts the node application when it detects any changes.
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
// Start an Express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// Routes
app.use('/api/workouts',workoutRoutes)   

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {       // Promise callback function
        // Next thing is to listen for requests (a certain port number)
        app.listen(process.env.PORT, () => {        // JS arrow function?
        console.log("Connected to DB and listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

