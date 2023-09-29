const mongoose = require('mongoose');

const { Schema, model } = mongoose;
//const Skills = require('./Skills');
const bcrypt = require('bcrypt');

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
    isEmployer: {
        type: Boolean,
        required: true,
    },
    userCity: {
        type: String,
        required: false,
    },
    userState: {
        type: String,
        required: false,
    },
    education: {
        type: String,
        required: false,
    },
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: "Skills",
        }
    ]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };


const User = mongoose.model('User', userSchema);

module.exports = User;