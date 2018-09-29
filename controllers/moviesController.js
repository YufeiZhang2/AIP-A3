const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const express = require("express");
const { movieModel } = require("../models/movieModel");
const router = express.Router();

//read all the movies
router.get("/", async (req, res) => {
  console.log(movieModel);
  const movies = await movieModel.find();
  res.send(movies);
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
router.delete("/:_id", async (req, res) => {
  try {
    console.log("my test:", req.params._id);
    const result = await movieModel.findByIdAndRemove({ _id: req.params._id });
    res.send(result);
  } catch (err) {
    //404 object not found
    res.status(404).send("The movie with the given ID was not found.");
  }
});

router.post("/", async (req, res) => {


  try {
    const Newmovie = new movieModel({
      name: req.body.name,
      showTime: req.body.showtime,
      runningTime: req.body.runningTime,
      director: req.body.director,
      genres: req.body.genres,
      stars: req.body.stars,
      storyline: req.body.storyline,
      status: req.body.status

    });

    console.log("In controller:", req.body);
    await Newmovie.save();
  } catch (err) {
    res.send(err);
  }








})

//update the status of a movie
router.put("/:_id", async (req, res) => {
  console.log("my test for updating:", req.params._id, req.body);

  //find  the movie by object id and update the status of it
  const movie = await movieModel.findByIdAndUpdate({ _id: req.params._id }, { status: req.body.status }, { new: true },
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
  console.log("my test for updating:", movie);
})

//function validateMovie(movie) { }

// router.delete("/:_id", [auth, admin], async (req, res) => {
//   try {
//     console.log("my test:", req.params._id);
//     const result = await movieModel.findByIdAndRemove({ _id: req.params._id });
//     res.send(result);
//   } catch (err) {
//     //404 object not found
//     res.status(404).send("The movie with the given ID was not found.");
//   }
// });

module.exports = router;
