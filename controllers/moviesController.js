const express = require("express");
const router = express.Router();
const movieModel = require('../models/movieModel');

router.get("/", async (req, res) => {
    const movies = await movieModel.find();
    res.send(movies);
});

router.get("/:_id", async (req, res) => {
    try {
        console.log("my test:", req.params._id);
        const movie = await movieModel.find({ _id: req.params._id });
        res.send(movie);
    } catch (err) {
        //404 object not found
        res.status(404).send('The movie with the given ID was not found.');
    }
});


module.exports = router;