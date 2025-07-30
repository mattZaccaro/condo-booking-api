const mongoose = require('mongoose');
const condoSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    pricePerNight: Number,
    isAvailable: { type: Boolean, default: true },
});

MediaSourceHandle.exports = mongoose.model('Condo', condoSchema);