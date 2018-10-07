const mongoose = require("mongoose");
const dbConfig = require("../../config/cinemaDb");

// Connect to the Movie database
mongoose
  .connect(dbConfig, { auth: { authdb: "admin" } })
  .then(() => console.log("Connected to MongoDB...")) // Sucessfully connected
  .catch(err => console.log("Bad connection", err)); // Catch an error

const movieModel = mongoose.model(
  "movie",
  new mongoose.Schema({
    name: {
      type: String,
      minlength: 1,
      maxlength: 100,
      unique: true,
      required: true
    },
    showtime: { type: [Date], required: true },
    runningTime: { type: Number, min: 1, max: 500, required: true },
    genres: { type: [String], minlength: 3, maxlength: 30, required: true },
    director: { type: String, minlength: 3, maxlength: 50, required: true },
    stars: { type: [String], minlength: 3, maxlength: 50, required: true },
    storyline: { type: String, minlength: 10, maxlength: 1000, required: true },
    price: { type: Number, min: 1, max: 10000, required: true },
    status: { type: String, enum: ["nowShowing", "comingSoon"], required: true }
  })
);

async function createMovies() {
  // Create different each document to store each movie object

  const forrestGump = new movieModel({
    name: "Forest Gump",
    showtime: [
      new Date("2018-10-08T10:00:00"),
      new Date("2018-10-08T14:00:00"),
      new Date("2018-10-08T20:00:00"),
      new Date("2018-10-11T10:00:00"),
      new Date("2018-10-11T17:00:00"),
      new Date("2018-10-11T20:00:00")
    ],
    runningTime: 142,
    director: "Robert Zemeckis",
    genres: ["dramas", "comedies"],
    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    storyline: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`,
    price: 25,
    status: "nowShowing"
  });

  const theLordOfRings = new movieModel({
    name: "The Lord of The Rings",
    showtime: [
      "2018-10-09T10:00:00",
      "2018-10-09T14:00:00",
      "2018-10-09T20:00:00",
      "2018-10-10T10:00:00",
      "2018-10-10T17:00:00",
      "2018-10-10T20:00:00"
    ],
    runningTime: 180,
    director: "Peter Jackson",
    genres: ["dramas", "fantasy"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    storyline: `An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!`,
    price: 25,
    status: "nowShowing"
  });

  const theMatrix = new movieModel({
    name: "The Matrix",
    showtime: [
      new Date("2018-10-25T10:00:00"),
      new Date("2018-10-25T14:00:00"),
      new Date("2018-10-25T20:00:00"),
      new Date("2018-10-26T10:00:00"),
      new Date("2018-10-26T17:00:00"),
      new Date("2018-10-27T20:00:00")
    ],
    runningTime: 180,
    director: "The Wachowski Brothers",
    genres: ["action", "fantasy"],
    stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    storyline: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    price: 25,
    status: "comingSoon"
  });

  const memento = new movieModel({
    name: "Memento",
    showtime: [
      new Date("2018-10-12T10:00:00"),
      new Date("2018-10-12T14:00:00"),
      new Date("2018-10-12T20:00:00"),
      new Date("2018-10-13T10:00:00"),
      new Date("2018-10-13T17:00:00"),
      new Date("2018-10-13T20:00:00")
    ],
    runningTime: 113,
    director: "Christopher Nolan",
    genres: ["crime", "dramas"],
    stars: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    storyline: `Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.`,
    price: 25,
    status: "nowShowing"
  });

  const shawshankRedemption = new movieModel({
    name: "The Shawshank Redemption",
    showtime: [
      "2018-10-09T10:00:00",
      "2018-10-09T14:00:00",
      "2018-10-09T20:00:00",
      "2018-10-12T10:00:00",
      "2018-10-12T17:00:00",
      "2018-10-12T20:00:00"
    ],
    runningTime: 142,
    director: "Frank Darabont",
    genres: ["crime", "dramas"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    storyline: `Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.`,
    price: 25,
    status: "nowShowing"
  });

  const titanic = new movieModel({
    name: "Titanic",
    showtime: [
      new Date("2018-10-14T10:00:00"),
      new Date("2018-10-14T14:00:00"),
      new Date("2018-10-14T20:00:00"),
      new Date("2018-10-15T10:00:00"),
      new Date("2018-10-15T17:00:00"),
      new Date("2018-10-15T20:00:00")
    ],
    runningTime: 195,
    director: "James Cameron",
    genres: ["romance", "dramas"],
    stars: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    storyline: `84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.`,
    price: 25,
    status: "nowShowing"
  });

  const lifeIsBeautiful = new movieModel({
    name: "Life is beautiful",
    showtime: [
      new Date("2018-10-16T10:00:00"),
      new Date("2018-10-16T14:00:00"),
      new Date("2018-10-16T20:00:00"),
      new Date("2018-10-17T10:00:00"),
      new Date("2018-10-17T17:00:00"),
      new Date("2018-10-17T20:00:00")
    ],
    runningTime: 116,
    director: "Roberto Benigni",
    genres: ["romance", "comedies"],
    stars: ["Roberto Benigni", "Nicoletta Braschi"],
    storyline: `When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.`,
    price: 25,
    status: "nowShowing"
  });

  const theShining = new movieModel({
    name: "The Shining",
    showtime: [
      new Date("2018-10-18T10:00:00"),
      new Date("2018-10-18T14:00:00"),
      new Date("2018-10-18T20:00:00"),
      new Date("2018-10-19T10:00:00"),
      new Date("2018-10-19T17:00:00"),
      new Date("2018-10-19T20:00:00")
    ],
    runningTime: 144,
    director: "Stanley Kubrick",
    genres: ["horror"],
    stars: [
      "Jack Nicholson",
      "Shelley Duvall",
      "Scatman Crothers",
      "Danny Lloyd"
    ],
    storyline: `A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.`,
    price: 25,
    status: "nowShowing"
  });

  const silenceOfTheLambs = new movieModel({
    name: "The Silence of the Lambs",
    showtime: [
      new Date("2018-10-20T10:00:00"),
      new Date("2018-10-20T14:00:00"),
      new Date("2018-10-20T20:00:00"),
      new Date("2018-10-21T10:00:00"),
      new Date("2018-10-21T17:00:00"),
      new Date("2018-10-21T20:00:00")
    ],
    runningTime: 144,
    director: "Stanley Kubrick",
    genres: ["horror", "dramas"],
    stars: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    storyline: `A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.`,
    price: 25,
    status: "comingSoon"
  });

  const catchMeIfYouCan = new movieModel({
    name: "Catch Me If You Can",
    showtime: [
      new Date("2018-10-22T10:00:00"),
      new Date("2018-10-22T14:00:00"),
      new Date("2018-10-22T20:00:00"),
      new Date("2018-10-23T10:00:00"),
      new Date("2018-10-23T17:00:00"),
      new Date("2018-10-23T20:00:00")
    ],
    runningTime: 141,
    director: "Steven Spielberg",
    genres: ["crime", "dramas"],
    stars: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"],
    storyline: `A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor.`,
    price: 25,
    status: "comingSoon"
  });

  const whenHarryMetSally = new movieModel({
    name: "When Harry Met Sally",
    showtime: [
      new Date("2018-10-24T10:00:00"),
      new Date("2018-10-24T14:00:00"),
      new Date("2018-10-24T20:00:00"),
      new Date("2018-10-25T10:00:00"),
      new Date("2018-10-25T17:00:00"),
      new Date("2018-10-25T20:00:00")
    ],
    runningTime: 96,
    director: "Rob Reiner",
    genres: ["romance", "comedies"],
    stars: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"],
    storyline: `Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.`,
    price: 25,
    status: "comingSoon"
  });

  const theGodfather = new movieModel({
    name: "The Godfather",
    showtime: [
      new Date("2018-10-26T10:00:00"),
      new Date("2018-10-26T14:00:00"),
      new Date("2018-10-26T20:00:00"),
      new Date("2018-10-27T10:00:00"),
      new Date("2018-10-27T17:00:00"),
      new Date("2018-10-27T20:00:00")
    ],
    runningTime: 175,
    director: "Francis Ford Coppola",
    genres: ["crime", "dramas"],
    stars: ["Marlon Brando", "Al Pacino", "James Caan"],
    storyline: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
    price: 25,
    status: "comingSoon"
  });

  const deadPoetsSociety = new movieModel({
    name: "Dead Poets Society",
    showtime: [
      new Date("2018-10-28T10:00:00"),
      new Date("2018-10-28T14:00:00"),
      new Date("2018-10-28T20:00:00"),
      new Date("2018-10-29T10:00:00"),
      new Date("2018-10-29T17:00:00"),
      new Date("2018-10-29T20:00:00")
    ],
    runningTime: 128,
    director: "Peter Weir",
    genres: ["comedies", "dramas"],
    stars: ["Robin Williams", "Rober Sean Leonard", "Ethan Hawke"],
    storyline: `English teacher John Keating inspires his students to look at poetry with a different perspective of authentic knowledge and feelings.`,
    price: 25,
    status: "comingSoon"
  });

  const vForVendetta = new movieModel({
    name: "V for Vendetta",
    showtime: [
      new Date("2018-10-30T10:00:00"),
      new Date("2018-10-30T14:00:00"),
      new Date("2018-10-30T20:00:00"),
      new Date("2018-10-31T10:00:00"),
      new Date("2018-10-31T17:00:00"),
      new Date("2018-10-31T20:00:00")
    ],
    runningTime: 132,
    director: "James McTeigue",
    genres: ["action", "crime"],
    stars: ["Hugo Weaving", "Natalie Portman", "Rupert Graves"],
    storyline: `In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.`,
    price: 25,
    status: "comingSoon"
  });

  // Save the movie documents in the database
  await forrestGump.save();
  await theLordOfRings.save();
  await theMatrix.save();
  await memento.save();
  await shawshankRedemption.save();
  await titanic.save();
  await lifeIsBeautiful.save();
  await theShining.save();
  await silenceOfTheLambs.save();
  await catchMeIfYouCan.save();
  await whenHarryMetSally.save();
  await theGodfather.save();
  await deadPoetsSociety.save();
  await vForVendetta.save();
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
