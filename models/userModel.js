const Joi = require('joi');
const mongoose = require("mongoose");

const userModel = mongoose.model(
    "users",
    new mongoose.Schema({
        name: { type: String, required: true, minlength: 2, maxlength: 100 },
        gender: { type: String, enum: ["male", "female", "intersex", "secret"], required: true },
        DOB: Date,
        password: { type: String, required: true, minlength: 6, maxlength: 20 },
        email: { type: String, unique: true, required: true, minlength: 5, maxlength: 100 }
    })
);

module.exports = userModel;