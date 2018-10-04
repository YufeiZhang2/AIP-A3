//const Joi = require('joi');
const mongoose = require("mongoose");

const movieModel = mongoose.model(
    "movie",
    new mongoose.Schema({
        name: { type: String, minlength: 1, maxlength: 100, unique: true, required: true },
        showtime: { type: [Date], required: true },
        runningTime: { type: Number, min: 1, max: 500, required: true },
        genres: { type: [String], minlength: 3, maxlength: 30, required: true },
        director: { type: String, minlength: 3, maxlength: 50 },
        stars: { type: [String], minlength: 3, maxlength: 50, required: true },
        storyline: { type: String, minlength: 10, maxlength: 1000, required: true },
        price: { type: Number, min: 1, max: 10000, required: true },
        status: { type: String, enum: ["nowShowing", "comingSoon"], required: true }
    })
);

exports.movieModel = movieModel;