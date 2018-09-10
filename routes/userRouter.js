var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");

var User = require("../models/userModel");

router.post("/", function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10) //encrypt password stored in database (plaintext, salting route)
  });

  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: "An error occured",
        error: err
      });
    }
    res.status(201).json({
      message: "User registered",
      obj: result
    });
  });
});

module.exports = router;
