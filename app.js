const config = require("config");
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./config/cinemaDb");
const moviesController = require("./controllers/moviesController");
const usersController = require("./controllers/usersController");
const authController = require("./controllers/authController");

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: jwtPrivateKey is not defined.");
//   process.exit(1);
// }

// Connect mongoose to our database
mongoose
  .connect(dbConfig)
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("bad connection"));

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//a built in middleware function to serve static files.
app.use(express.static(path.join(__dirname, "public")));

// Set api routes
app.use("/api/movies", moviesController);
app.use("/api/users", usersController);
app.use("/api/auth", authController);

//Handle errors when the api is not defined
app.use("/", (req, res) => {
  res.send("Invalid page");
});

//Listen to port local environment port or port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
