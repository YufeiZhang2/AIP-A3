const mongoose = require("mongoose");

// Connect to the Movie database
mongoose
    .connect("mongodb://localhost/users")
    .then(() => console.log("Connected to MongoDB...")) // Sucessfully connected
    .catch(err => console.log("Bad connection", err)); // Catch an error

const userModel = mongoose.model(
    "users",
    new mongoose.Schema({
        name: { type: String, required: true },
        gender: { type: String, enum: ["male", "female", "intersex"] },
        DOB: Date,
        password: String,
        email: String
    })
);


async function createUsers() {
    // Create different each document to store each movie object

    const Ivan = new userModel({
        name: "Yufei Zhang",
        gender: "male",
        DOB: new Date("<1992-02-22>"),
        password: "123456",
        email: "yufei.z222@gmail.com"
    });

    // Save the user documents in the database
    await Ivan.save();
}

createUsers();

