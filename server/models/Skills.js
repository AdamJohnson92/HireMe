const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const skillsSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
});

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;