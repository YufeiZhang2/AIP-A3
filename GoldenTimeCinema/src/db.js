const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movie')
    .then(() => console.log('good conncetion'))
    .catch(err => console.log('bad connection'));

const movieSchema = new mongoose.Schema({
    name: String,
    showDate: [String],
    showTime: [String],
    runningTime: Number,
    directors: String,
    stars: String,
    storyline: String
});

const Movie = mongoose.model('Movie', movieSchema);

async function createMovies() {
    const ForrestGump = new Movie({
        name: 'Forest Gump',
        showDate: ['25-Aug-2018', '26-Aug-2018', '27-Aug-2018'],
        showTime: ['10:00 - 12:22', '3:00 - 5:22', '19:00 - 9:22'],
        runningTime: 142,
        directors: 'Robert Zemeckis',
        stars: ' Tom Hanks, Robin Wright, Gary Sinise',
        storyline: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. 
        His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends 
        called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, 
        starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. 
        However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. 
        Although in the end all he wants to prove is that anyone can love anyone.`
    });

    console.log(await ForrestGump.save());

}

createMovies();

// async function getCourses() {
//     return await Course
//         .find({ isPublished: true, tags: "backend" })
//         .sort({ name: 1 })
//         .select({ name: 1, author: 1 });

// }


// async function run() {
//     const courses = await getCourses();
//     console.log(courses);
// }

// run();
