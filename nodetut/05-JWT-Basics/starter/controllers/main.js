// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req,res) => {
    const {username, password} = req.body

    // mongoose validation has an automatic option for checking for null values
    // Joi
    // check in the controller

    if(!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    // random id for demo, normally provided by DB!!!!
    const id = new Date().getTime()

    // try to keep payload small, better experience for user
    // just for demo; in production use long, complex and unguessable string value for secret !!!!
    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg:'user created token',token})
}

const dashboard = async (req,res) => {
   
    const luckyNumber = Math.floor(Math.random()*100)
    res
        .status(200)
        .json({msg:`Hello, ${req.user.username}`,secret:`Here is your lucky number: ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}