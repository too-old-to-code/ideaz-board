const DB_URL = process.env.DB_URL;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// set up the connection to mongodb
module.exports = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})