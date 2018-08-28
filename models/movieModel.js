//const Joi = require('joi');
const mongoose = require("mongoose");

const MovieModel = mongoose.model(
    "movie",
    new mongoose.Schema({
        name: { type: String, required: true },
        showDate: [String],
        showTime: [String],
        runningTime: Number,
        directors: String,
        stars: String,
        storyline: String,
        status: String
    })
);

module.exports = MovieModel;