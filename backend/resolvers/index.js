const queries = require('./queries');
const mutations = require('./mutations');
const subscriptions = require('./subscriptions').subscriptions;

module.exports = {
  Subscription: subscriptions,
  Query: queries,
  Mutation: mutations
}