require("./models/userModel");
require("./models/bookingModel");
require("./config/passportConfig");
require("./config/config");

const passport = require("passport");
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const moviesController = require("./controllers/moviesController");
const usersController = require("./controllers/usersController");
const dbConfig = require("./config/cinemaDb");
const ticketsController = require("./controllers/ticketsController");

// Connect mongoose to our database
mongoose
  .connect(
    dbConfig,
    { auth: { authdb: "admin" } }
  )
  .then(() => console.log(`Connected to MongoDB ${dbConfig}...`))
  .catch(err => console.log("bad connection"));

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware for passport
app.use(passport.initialize());
//a built in middleware function to serve static files.
app.use(express.static(path.join(__dirname, "public")));

// Set api routes
app.use("/api/movies", moviesController);
app.use("/api/movies/:_id", moviesController);
app.use("/api", usersController);
app.use("/api", ticketsController);

// Handle errors for validation
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach(key =>
      valErrors.push(err.errors[key].message)
    );
    res.status(422).send(valErrors);
  }
});

//Handle errors when the api is not defined
app.use("/", (req, res) => {
  res.send("Invalid page");
});

//Listen to port local environment port or port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
