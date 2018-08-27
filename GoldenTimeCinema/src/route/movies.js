//const Joi = require('joi');
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Movie = mongoose.model(
  "Movie",
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

router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

module.exports = router;
