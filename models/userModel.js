const Joi = require('joi');
const mongoose = require("mongoose");

const userModel = mongoose.model(
    "users",
    new mongoose.Schema({
        name: { type: String, required: true },
        gender: { type: String, enum: ["male", "female", "intersex"] },
        DOB: Date,
        password: String,
        email: String
    })
);

module.exports = userModel;