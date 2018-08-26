
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movie')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('bad connection'));

const Movie = mongoose.model('Movie', new mongoose.Schema({
    name: { type: String, required: true },
    showDate: [String],
    showTime: [String],
    runningTime: Number,
    directors: String,
    stars: String,
    storyline: String
}));

async function createMovies() {
    const forrestGump = new Movie({
        name: 'Forest Gump',
        showDate: ['25-Aug-2018', '26-Aug-2018', '27-Aug-2018'],
        showTime: ['10:00 - 12:22', '3:00 - 5:22', '19:00 - 9:22'],
        runningTime: 142,
        directors: 'Robert Zemeckis',
        stars: ' Tom Hanks, Robin Wright, Gary Sinise',
        storyline: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`
    });

    const theLordOfRings = new Movie({
        name: 'The Lord of Rings',
        showDate: ['25-Aug-2018', '26-Aug-2018', '27-Aug-2018'],
        showTime: ['12:30 - 15:30', '16:00 - 19:00', '20:00 - 23:00'],
        runningTime: 180,
        directors: 'Peter Jackson',
        stars: 'Elijah Wood, Ian McKellen, Orlando Bloom',
        storyline: `An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!`
    });

    console.log(await forrestGump.save());
    console.log(await theLordOfRings.save());

}

createMovies();