const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const educationSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;