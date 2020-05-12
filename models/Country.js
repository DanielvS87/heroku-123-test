const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    continent: {
        type: String,
        required: true
    },
    world_cup_wins: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Country', countrySchema);