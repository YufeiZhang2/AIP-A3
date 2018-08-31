const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const moviesController = require('./controllers/moviesController');
// const test = require('./controllers/test');

// Connect mongoose to our database
mongoose.connect(config)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('bad connection'));

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//a built in middleware function to serve static files.
app.use(express.static(path.join(__dirname, 'public')));

// Set movie api routes
app.use('/api/movies', moviesController);

//Handle errors when the api is not defined
// app.use('/', (req, res) => {
//     res.send("Invalid page");
// })

//Listen to port local environment port or port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
