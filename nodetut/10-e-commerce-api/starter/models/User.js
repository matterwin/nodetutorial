const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Pls provide name'],
        maxlength:50,
        minlength:3
    },
    email:{
        type:String,
        required:[true,'Pls provide email'],
        validate:{
            validator:validator.isEmail,
            message:'Please provide valid email'
        }
    },
    password:{
        type:String,
        required:[true,'Pls provide password'],
        minlength:6
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
});

module.exports = UserSchema