const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { userModel, validate } = require("../models/userModel");
const _ = require("lodash");

//read all the users
router.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

//read a user by its objectId
router.get("/:_id", async (req, res) => {
  try {
    console.log("my test:", req.params._id);
    const user = await userModel.find({ _id: req.params._id });
    res.send(user);
  } catch (err) {
    //404 object not found
    res.status(404).send("The user with the given ID was not found.");
  }
});

//delete a user by its objectId
router.delete("/delete/:_id", async (req, res) => {
  try {
    console.log("my test:", req.params._id);
    const result = await userModel.deleteOne({ _id: req.params._id });
    res.send(result);
  } catch (err) {
    //404 object not found
    res.status(404).send("The movie with the given ID was not found.");
  }
});

//register a new user
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if there is existing user in the database
  let user = await userModel.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  //create a new user and using lodash to pick certain properties to store in the database
  user = new User(
    _.pick(req.body, ["name", "DOB", "gender", "email", "password"])
  );

  // encrypt plain text password using bcrypt to generate a salt and attach salt to new hashed password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  //save a new user
  await user.save();

  //using lodash to return certain properties to the client
  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
