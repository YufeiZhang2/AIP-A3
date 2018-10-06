const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const jwtHelper = require("../config/jwtHelper");
const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");
const User = mongoose.model("user");

module.exports.register = (req, res, next) => {
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.gender = req.body.gender;
  user.dob = req.body.dob;
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
      return res.status(200).json({
        status: true,
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

module.exports.editUserProfile = (req, res, next) => {
  var userNewData = {
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    gender: req.body.gender,
    dob: req.body.dob
  };

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
