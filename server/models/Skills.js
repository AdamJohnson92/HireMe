const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const skillsSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
});

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;