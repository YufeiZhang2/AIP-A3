const mongoose = require('mongoose');
const movies = require('../route/movies');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/movie')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('bad connection'));

app.use(express.json());
app.use('/api/movies', movies);

//const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port 3000...`));


