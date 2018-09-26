const mongoose = require("mongoose");

// Connect to the Movie database
mongoose
  .connect("mongodb://localhost/cinema")
  .then(() => console.log("Connected to MongoDB...")) // Sucessfully connected
  .catch(err => console.log("Bad connection", err)); // Catch an error

const movieModel = mongoose.model(
  "movie",
  new mongoose.Schema({
    name: { type: String, minlength: 1, maxlength: 100, unique: true, required: true },
    showTime: { type: [Date], required: true },
    runningTime: { type: Number, min: 1, max: 500, required: true },
    genres: { type: [String], minlength: 3, maxlength: 30, required: true },
    directors: { type: String, minlength: 3, maxlength: 50 },
    stars: { type: [String], minlength: 3, maxlength: 50, required: true },
    storyline: { type: String, minlength: 10, maxlength: 1000, required: true },
    status: { type: String, enum: ["nowShowing", "comingSoon"], required: true }
  })
);

async function createMovies() {
  // Create different each document to store each movie object

  const forrestGump = new movieModel({
    name: "Forest Gump",
    showTime: [new Date("2018-08-25T12:00:00"), new Date("2018-08-25T16:00:00"), new Date("2018-08-25T21:00:00"),
    new Date("2018-08-26T10:00:00"), new Date("2018-08-26T17:00:00"), new Date("2018-08-27T20:00:00")],
    runningTime: 142,
    directors: "Robert Zemeckis",
    genres: ["drama", "comedy"],
    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    storyline: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`,
    status: "nowShowing"
  });

  const theLordOfRings = new movieModel({
    name: "The Lord of Rings",
    showTime: [new Date("2018-08-25T10:00:00"), new Date("2018-08-25T14:00:00"), new Date("2018-08-25T20:00:00"),
    new Date("2018-08-26T10:00:00"), new Date("2018-08-26T17:00:00"), new Date("2018-08-27T20:00:00")],
    runningTime: 180,
    directors: "Peter Jackson",
    genres: ["adventure", "fantasy"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    storyline: `An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!`,
    status: "nowShowing"
  });

  const theMatrix = new movieModel({
    name: "The Matrix",
    showTime: [new Date("2018-09-25T10:00:00"), new Date("2018-09-25T14:00:00"), new Date("2018-09-25T20:00:00"),
    new Date("2018-09-26T10:00:00"), new Date("2018-09-26T17:00:00"), new Date("2018-09-27T20:00:00")],
    runningTime: 180,
    directors: "The Wachowski Brothers",
    genres: ["adventure", "fantasy"],
    stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    storyline: `test summary`,
    status: "comingSoon"
  });

  // Save the movie documents in the database
  await forrestGump.save();
  await theLordOfRings.save();
  await theMatrix.save();
}

createMovies();

// // Query documents:
// async function getNowShowingMovies() {
//   const movies = await Movie.find({ status: "nowShowing" }) //only find Now Showing movies
//     .limit(5) // the number of movies shown is 5
//     .sort({ name: 1 }) // sort the result based on name
//     .select({ name: 1, directors: 1, runningTime: 1 }); // only display name, directors and running time
//   console.log(movies);
// }

// getNowShowingMovies();
