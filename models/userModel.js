const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create user schema
var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "First name is required"
  },
  lastName: {
    type: String,
    required: "Last name is required"
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true
  },
  password: {
    type: String,
    required: "Password is required",
    minlength: [6, "Password must have at least 4 characters"]
  },
  gender: {
    type: String,
    required: "Gender is required"
  },
  dob: {
    type: Date,
    required: "Date of birth is required"
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  saltSecret: String
});

// Custom validation for email format
userSchema.path("email").validate(value => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}, "Invalid email address");

// Pre-Events before saving a new user to randomly generate a saltSecret code to encrypt the password
userSchema.pre("save", function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

// Methods
userSchema.methods.verifyPassword = function(password) {
  // compare plain password and encrypted password
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
  // Get user id and user role from token
  return jwt.sign(
    { _id: this._id, admin: this.isAdmin },
    process.env.jwtPrivateKey,
    {
      expiresIn: process.env.jwtExpirationTime // Set JWT expiration time
    }
  );
};

mongoose.model("user", userSchema);
