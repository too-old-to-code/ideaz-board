// require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const DB_URL = process.env.DB_URL;
// const JWT_SECRET = 'MY_SECRET';
// const DB_URL = 'mongodb://ib-user:password@mongodb/ideazboard';
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./definitions');
const resolvers = require('./resolvers')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const DataLoader = require('dataloader')
const dbQueries = require('./db-queries');

const wordArt = fs.readFileSync('art.txt', 'utf8');
const jwt = require('jsonwebtoken');

const server = new ApolloServer({
  typeDefs,
  playground: false,
  resolvers,
  context: async (obj) => {
    let requestorId = null;
    if (obj.req) {
      let { authorization } = obj.req.headers
      const token = authorization.replace('Bearer ', '');

      try {
        const tokenPayload = await jwt.verify(token, JWT_SECRET)
        requestorId = tokenPayload.id
      } catch (e) { console.log(e)}
    }
    return {
      requestorId,
      dataLoaders: {
        board: new DataLoader (async boardId => {
          return dbQueries.getBoardWithAllChildren([boardId], requestorId);
        })
      }
    }
  },
  // dataSources: () => ({ db })
});

function clearConsole () {
  console.log('\033[2J');
  process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
  console.clear();
}

console.log('Checking DB connection...')
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  // clearConsole();
  return server.listen()
})
.then(({url, ws}) => {
  console.log(wordArt)
  console.log(`Connected to DB`)
  console.log(`🚀  Server ready at ${url}`)
})
.catch((err) => console.log(err.message))



