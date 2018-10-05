const mongoose = require("mongoose");

const bookingModel = mongoose.model(
  "booking",
  new mongoose.Schema({
    movieName: { type: String },
    session: { type: String },
    price: { type: Number },
    email: { type: String }
  })
);

exports.bookingModel = bookingModel;
