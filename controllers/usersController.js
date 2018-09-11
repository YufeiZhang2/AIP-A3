const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const User = mongoose.model("user");

module.exports.register = (req, res, next) => {
  var user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["This email has been registered already."]);
      else return next(err);
    }
  });
};

module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate("local", (err, user, info) => {
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // successful authentication: return a token
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user)
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    else
      return res
        .status(200)
        .json({ status: true, user: _.pick(user, ["email"]) });
  });
};

// const auth = require("../middleware/auth");
// const jwt = require("jsonwebtoken");
// const config = require("config");
// const bcrypt = require("bcrypt");
// const express = require("express");
// const router = express.Router();
// const { userModel, validate } = require("../models/userModel");
// const _ = require("lodash");

// // get the current user
// // check authorization
// router.get("/me", auth, async (req, res) => {
//   const user = await User.findById(req.user._id).select("-password"); // exclude password in request sent back to client
//   res.send(user);
// });

// //register a new user
// router.post("/", async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //check if there is existing user in the database
//   let user = await userModel.findOne({ email: req.body.email });
//   if (user) return res.status(400).send("User already registered");

//   //create a new user and using lodash to pick certain properties to store in the database
//   user = new User(_.pick(req.body, ["email", "password"]));

//   // encrypt plain text password using bcrypt to generate a salt and attach salt to new hashed password
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);

//   //save a new user
//   await user.save();

//   const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey")); //set the payload of jwt
//   //using lodash to return certain properties to the client with attached header of jwt
//   res
//     .header("x-auth-token", token)
//     .send(_.pick(user, ["_id", "name", "email"]));
// });

// module.exports = router;
