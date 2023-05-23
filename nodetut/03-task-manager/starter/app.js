const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const port = 3000;
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server on ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()