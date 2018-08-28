const express = require("express");
const router = express.Router();
const movieModel = require('../models/movieModel');

router.get("/", async (req, res) => {
    const movies = await movieModel.find();
    res.send(movies);
});

module.exports = router;