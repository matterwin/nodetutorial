const mongoose = require('mongoose');

// Set the strictQuery option before connecting to the database
mongoose.set('strictQuery', true);

const connectDB = (url) => {
  return mongoose.connect(url)
};

module.exports = connectDB;
