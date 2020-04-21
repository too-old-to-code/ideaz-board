const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { AuthenticationError } = require('apollo-server');

module.exports = {
  getBoard: async (parent, { boardId }, ctx) => {
    let board;
    try {
      board = await ctx.dataLoaders.board.load(boardId);
      return board;
    } catch (e) {
      throw new AuthenticationError('Access pin required')
    }
  },

  getUserToken: async (parent, { username, password }) => {
    // create a hash out of the user's name combined with a password. This should be sufficiently
    // unique for the use case.
    const userId = crypto.createHash('sha1').update(`${username}${password}`).digest('base64');
    return jwt.sign({ name: username, identityHash: userId }, JWT_SECRET);
  }
}