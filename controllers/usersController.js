const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const jwtHelper = require("../config/jwtHelper");
const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");
const User = mongoose.model("user");

// Register new user into the database
module.exports.register = (req, res, next) => {
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.gender = req.body.gender;
  user.dob = req.body.dob;
  // Set user as admin if the email is right
  if (user.email === "admin@goldentimecinema.com") {
    user.isAdmin = true;
  }
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["This email has been registered already."]);
      else return next(err);
    }
  });
};

// Check user authentication during login
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

// Get user profile
module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user)
      // If cannot find user with specified Id
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    // If user with specified id is found
    else
      return res.status(200).json({
        status: true,
        // only collect data from certain properties
        user: _.pick(user, [
          "firstName",
          "lastName",
          "email",
          "gender",
          "dob",
          "isAdmin",
          "_id"
        ])
      });
  });
};

// Update user profile
module.exports.editUserProfile = (req, res, next) => {
  // Create new set of user data from the edit form input
  var userNewData = {
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    gender: req.body.gender,
    dob: req.body.dob
  };

  // Find user with specified id and update the new set of data
  User.findByIdAndUpdate(
    { _id: req._id },
    { $set: userNewData },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in User Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
};

router.post("/register", userController.register);
router.post("/authenticate", userController.authenticate);
router.get(
  "/userprofile",
  jwtHelper.verifyJwtToken,
  userController.userProfile
);

router.put(
  "/editprofile",
  jwtHelper.verifyJwtToken,
  userController.editUserProfile
);

module.exports = router;
