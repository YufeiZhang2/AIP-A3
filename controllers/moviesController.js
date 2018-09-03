const express = require("express");
const router = express.Router();
const movieModel = require("../models/movieModel");

//read all the movies
router.get("/", async (req, res) => {
  const movies = await movieModel.find();
  res.send(movies);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return rest.status(400).send(error.details[0].message);

  let movie = new Movie({ name: req.body.name });
  movie = await movie.save();

  res.send(movie);
});

//read a movie by its objectId
router.get("/:_id", async (req, res) => {
  try {
    console.log("my test:", req.params._id);
    const movie = await movieModel.find({ _id: req.params._id });
    res.send(movie);
  } catch (err) {
    //404 object not found
    res.status(404).send("The movie with the given ID was not found.");
  }
});

//delete a movie by its objectId
router.delete("/delete/:_id", async (req, res) => {
  try {
    console.log("my test:", req.params._id);
    const result = await movieModel.deleteOne({ _id: req.params._id });
    res.send(result);
  } catch (err) {
    //404 object not found
    res.status(404).send("The movie with the given ID was not found.");
  }
});

module.exports = router;
