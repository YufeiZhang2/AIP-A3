const Joi = require('joi');
const mongoose = require("mongoose");

const userModel = mongoose.model(
    "user",
    new mongoose.Schema({
        name: { type: String, required: true, minlength: 2, maxlength: 100 },
        gender: { type: String, enum: ["male", "female", "intersex", "secret"], required: true },
        DOB: Date,
        password: { type: String, required: true, minlength: 6, maxlength: 20 },
        email: { type: String, unique: true, required: true, minlength: 5, maxlength: 1024 }
    })
);

function validateUser(user) {
    const schema = {
        name: Joi.string().min(2).max(100).required(),
        email: Joi.string().min(5).max(255).required().email(),
        gender: Joi.string().required(),
        password: Joi.string().min(6).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.userModel = userModel;
exports.validate = validateUser;