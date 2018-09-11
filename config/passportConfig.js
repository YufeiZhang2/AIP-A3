const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

var User = mongoose.model("user");

passport.use(
  new localStrategy({ usernameField: "email" }, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) return done(err);
      // Cannot find user with given email
      else if (!user)
        return done(null, false, {
          message: "This email is not registered yet."
        });
      // Invalid password
      else if (!user.verifyPassword(password))
        return done(null, false, { message: "Invalid password." });
      // Successful authentication
      else return done(null, user);
    });
  })
);
