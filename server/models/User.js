const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const Education = require('./Education');
const Skills = require('./Skills');

//Need to incorporate
//const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    userCity: {
        type: String,
        required: false,
        trim: true
    },
    userState: {
        type: String,
        required: false,
        trim: true
    },
    education: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Education'
        }
    ],
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Skills'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;