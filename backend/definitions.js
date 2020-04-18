const { gql } = require('apollo-server');

const typeDefs = gql`
  type Subscription {
    boardAdded: Board
    cardAdded(boardId: String!): Card
    cardUpdated(boardId: String!): Card
    cardDeleted(boardId: String!): Card
    sectionAdded(boardId: String!): Section
    sectionDeleted(boardId: String!): Section
  }

  type Card {
    _id: ID
    title: String
    author: String
    text: String
    likedBy: [String]
    sectionId: String
  }

  type Section {
    _id: ID
    title: String
    cards: [Card]
  }

  type Board {
    _id: ID
    title: String
    password: String
    accessPin: String
    username: String
    sections: [Section]
  }

  input NewBoardInput {
    title: String
    password: String
    username: String
    accessPin: String
  }

  input NewSectionInput {
    boardId: ID
    title: String
  }

  input NewCardInput {
    sectionId: ID
    title: String
    author: String
    text: String
  }

  input UpdateCardInput {
    id: ID
    sectionId: ID
    title: String
    author: String
    text: String
    likedBy: [String]
  }

  input UpdateSectionInput {
    id: ID
    title: String
  }

  type Query {
    getBoard(boardId: ID): Board
    getUserToken(username: String!, password: String!): String
  }

  type Mutation {
    updateCardVotes(boardId: String!, cardId: String!, sectionId: String!): Card
    unlockBoard(boardId: String!, pin: String!): String
    addBoard(newBoard: NewBoardInput, sectionNames: [String]): Board
    addSection(newSection: NewSectionInput): Section
    addCard(newCard: NewCardInput, boardId: String!): Card
    updateCard(cardChanges: UpdateCardInput, boardId: String!): Card
    updateSection(sectionChanges: UpdateSectionInput): Section
    deleteCard(cardId: String!, sectionId: String!, boardId: String): Card
    deleteSection(sectionId: String!, boardId: String): Section
  }
`

module.exports = typeDefs
