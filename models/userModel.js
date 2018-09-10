const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  saltSecret: String
});

// Pre-Events before saving a new user to randomly generate a saltSecret code to encrypt the password
userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.saltSecret = salt;
          next();
      });
  });
});

mongoose.model('user', userSchema);











// const config = require("config");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, minlength: 2, maxlength: 100 },
//   gender: {
//     type: String,
//     enum: ["male", "female", "intersex", "secret"],
//     required: true
//   },
//   DOB: Date,
//   password: { type: String, required: true, minlength: 6, maxlength: 20 },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     minlength: 5,
//     maxlength: 1024
//   },
//   isAdmin: Boolean
// });

// userSchema.methods.generateAuthToken = function() {
//   // generate a json web token when user sign in with selected properties in the payload of jwt
//   const token = jwt.sign(
//     { _id: this._id, isAdmin: this.isAdmin },
//     config.get("jwtPrivateKey")
//   );
//   return token;
// };

// const userModel = mongoose.model("user", userSchema);

// function validateUser(user) {
//   const schema = {
//     name: Joi.string()
//       .min(2)
//       .max(100)
//       .required(),
//     email: Joi.string()
//       .min(5)
//       .max(255)
//       .required()
//       .email(),
//     gender: Joi.string().required(),
//     password: Joi.string()
//       .min(6)
//       .max(255)
//       .required()
//   };
//   return Joi.validate(user, schema);
// }

// exports.userModel = userModel;
// exports.validate = validateUser;
