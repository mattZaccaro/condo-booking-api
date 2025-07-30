const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    isAdmin: {type: Boolean, default: false},
});

modui.exports = mongoose.model('User', userSchema);