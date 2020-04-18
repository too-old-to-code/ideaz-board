const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_SECRET = 'MY_SECRET';
const defs = require('./definitions')
const { PubSub, withFilter, AuthenticationError } = require('apollo-server');
const pubsub = new PubSub();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const {
  getBoardWithAllChildren,
  createBoard,
  createSection,
  createCard,
  updateSection,
  updateCard,
  addSectionToBoard,
  addCardToSection,
  removeSectionFromBoard,
  deleteSection,
  deleteCard,
  removeCardFromSection,
  unlockBoard,
  updateCardVotes
} = require('./db-queries')


const BOARD_ADDED = 'BOARD_ADDED';
const CARD_ADDED = 'CARD_ADDED';
const CARD_UPDATED = 'CARD_UPDATED';
const SECTION_ADDED = 'SECTION_ADDED';
const CARD_DELETED = 'CARD_DELETED';
const SECTION_DELETED = 'SECTION_DELETED';

let timer = () => new Promise((res, rej) => {
  setTimeout(() => {
    res()
  }, 3000)
})

const filter = eventName => withFilter(
  () => pubsub.asyncIterator(eventName),
  (payload, variables) => variables.boardId === payload.boardId
)

module.exports = {
  Subscription: {
    boardAdded: {
      subscribe: () => pubsub.asyncIterator([BOARD_ADDED])
    },
    sectionAdded: {
      subscribe: filter(SECTION_ADDED)
    },
    sectionDeleted: {
      subscribe: filter(SECTION_DELETED)
    },
    cardAdded: {
      subscribe: filter(CARD_ADDED)
    },
    cardUpdated: {
      subscribe: filter(CARD_UPDATED)
    },
    cardDeleted: {
      subscribe: filter(CARD_DELETED)
    }
  },
  Query: {
    // getBoard: async (parent, {boardId}, {dataSources}, info) => {
    //   return getBoardWithAllChildren(boardId);
    // }
    getBoard: async (parent, { boardId }, ctx, info) => {
      let board;
      try {
        board = await ctx.dataLoaders.board.load(boardId);
        return board;
      } catch (e) {
        throw new AuthenticationError('Access pin required')
      }
      // return ctx.dataLoaders.board.load(boardId)
      // return getBoardWithAllChildren(boardId);
    },

    getUserToken: async (parent, { username, password }) => {
      const userId = crypto.createHash('sha1').update(`${username}${password}`).digest('base64');
      return jwt.sign({ username, id: userId }, JWT_SECRET)
    }
  },
  Mutation: {
    updateCardVotes: async (parent, { cardId, boardId, sectionId }, ctx) => {
      let updatedCard = await updateCardVotes(cardId, ctx.requestorId);
      pubsub.publish(CARD_UPDATED, { cardUpdated: {...updatedCard, sectionId} , boardId: boardId });
      return updatedCard;

    },

    unlockBoard: async (parent, { boardId, pin }, ctx) => {
      const response = await unlockBoard(boardId, pin, ctx.requestorId);
      return 'success'
    },

    addBoard: async (parent, { newBoard, sectionNames }, { requestorId }, info) => {
      return createBoard(newBoard, sectionNames, requestorId);
    },

    addSection: async (parent, { newSection }, context)=> {
      const section = await createSection(newSection);
      // await timer();
      await addSectionToBoard(section, newSection.boardId);
      pubsub.publish(SECTION_ADDED, { sectionAdded: section, boardId:newSection.boardId });
      return section;
    },

    addCard: async (parent, { newCard, boardId }) => {
      const card = await createCard(newCard);
      await addCardToSection(card, newCard.sectionId);
      pubsub.publish(CARD_ADDED, { cardAdded: card, boardId });
      return card;
    },

    updateCard: async (parent, { cardChanges, boardId }) => {
      const { id, ...changes } = cardChanges;
      // await timer();
      console.log(cardChanges)
      pubsub.publish(CARD_UPDATED, { cardUpdated: { ...cardChanges, _id: id } , boardId: boardId });
      return updateCard(id, changes);
    },

    updateSection: (parent, { sectionChanges }) => {
      const { id, ...changes } = sectionChanges;
      return updateSection(id, changes);
    },

    deleteCard: async (parent, { cardId, sectionId, boardId }) => {
      await removeCardFromSection(cardId, sectionId);
      const deletedCard = await deleteCard(cardId);
      const deletedCardWithSectionId = {...deletedCard, sectionId };
      pubsub.publish(CARD_DELETED, { cardDeleted: { sectionId, _id: cardId } , boardId });
      return deletedCardWithSectionId;
    },

    deleteSection: async (parent, { sectionId, boardId }) => {
      await removeSectionFromBoard(sectionId, boardId);
      const deletedSection = await deleteSection(sectionId);
      pubsub.publish(SECTION_DELETED, { sectionDeleted: { _id: sectionId}, boardId})
      return deletedSection;

    }

  }
}