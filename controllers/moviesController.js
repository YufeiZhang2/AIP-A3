const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const express = require("express");
const { movieModel } = require("../models/movieModel");
const router = express.Router();

// const sendmail = require('sendmail')({
//   logger: {
//     debug: console.log,
//     info: console.info,
//     warn: console.warn,
//     error: console.error
//   },
//   silent: false,
//   dkim: { // Default: False
//     privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
//     keySelector: 'mydomainkey'
//   },
//   devPort: 1025, // Default: False
//   devHost: 'localhost', // Default: localhost
//   smtpPort: 2525, // Default: 25
//   smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
// })

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

//create a movie in database
router.post("/", async (req, res) => {


  try {
    const Newmovie = new movieModel({
      name: req.body.name,
      showtime: req.body.showtime,
      runningTime: req.body.runningTime,
      director: req.body.director,
      genres: req.body.genres,
      stars: req.body.stars,
      price: req.body.price,
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

// sendmail({
//   from: 'no-reply@yourdomain.com',
//   to: 'yufei.z222@gmail.com',
//   subject: 'test sendmail',
//   html: 'Mail of test sendmail ',
// }, function (err, reply) {
//   console.log(err && err.stack);
//   console.dir(reply);
// });


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
