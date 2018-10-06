var mongoose = require('mongoose');
var cinemaDbOnCloud = mongoose.createConnection('mongodb:///opt/bitnami/mongodb/tmp/mongodb-27017.sock/DATABASE');

// const cinemaDbOnCloud = 'mongodb://root:l52BdJYzDOiF@localhost/local';
module.exports = cinemaDbOnCloud;