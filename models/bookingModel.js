const mongoose = require("mongoose");

<<<<<<< HEAD
//booking model
=======
// Create ticket model from ticket schema
>>>>>>> 861f4fb494cab87601f2b5606bb497880454c466
const bookingModel = mongoose.model(
  "booking",
  new mongoose.Schema({
    movieName: { type: String },
    session: { type: Date },
    price: { type: Number },
    email: { type: String },
    userId: { type: String }
  })
);

exports.bookingModel = bookingModel;
