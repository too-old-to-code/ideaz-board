const { PubSub } = require('apollo-server');

// we only want a single instance in the app
module.exports = new PubSub();