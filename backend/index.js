// environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const ENVIRONMENT = process.env.ENVIRONMENT;

// apollo server components
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./definitions');
const resolvers = require('./resolvers');

// improve get requests with caching and batching
const DataLoader = require('dataloader')

// database connection and queries
const dbInit = require('./db');
const dbQueries = require('./db-queries');

// authentication
const jwt = require('jsonwebtoken');

// extracted console messages
const consoleMessage = require('./console-messages');

// Use jwt in request header to authenticate the user
const authenticateRequestor = (obj) => {
  if (obj.req) {
    let { authorization } = obj.req.headers
    const token = authorization.replace('Bearer ', '');
    try {
      return jwt.verify(token, JWT_SECRET)
    } catch (e) {
      console.log(e)
      return Promise.resolve(null);
    }
  }
}

// Set up the apollo server with all its component pieces
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: ENVIRONMENT === 'development',
  context: async (obj) => {
    const requestor = await authenticateRequestor(obj);
    return {
      requestor,
      dataLoaders: {
        board: new DataLoader (async boardId =>
          dbQueries.getBoardWithAllChildren([boardId], requestor.identityHash)
        )
      }
    }
  }
});

consoleMessage.checkingDatabase();

// connect to the database
dbInit.then(() => {
  consoleMessage.clearConsole();
  // start the apollo server
  return server.listen()
})
.then(({url}) => {
  consoleMessage.wordArt();
  consoleMessage.serverReady(url);
})
.catch((err) => console.log(err.message))



