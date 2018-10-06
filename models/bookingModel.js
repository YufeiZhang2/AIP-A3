const mongoose = require("mongoose");

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
