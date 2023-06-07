const express = require('express')
const router = express.Router()
const testUser = require('../middleware/testUser')

const rateLimiter = require('express-rate-limit')
const apiLimiter = rateLimiter({
    windowMS:15*60*1000,
    max:10,
    message:{
        msg:'Too many requests, please wait 15 minutes'
    }
})

const { register, login, updateUser } = require('../controllers/auth')
const authenticateUser = require('../middleware/authentication')
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
