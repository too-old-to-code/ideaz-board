const { withFilter } = require('apollo-server');
const pubsub = require('./pubsub');

const BOARD_ADDED = 'BOARD_ADDED';
const CARD_ADDED = 'CARD_ADDED';
const CARD_UPDATED = 'CARD_UPDATED';
const CARD_DELETED = 'CARD_DELETED';
const SECTION_ADDED = 'SECTION_ADDED';
const SECTION_DELETED = 'SECTION_DELETED';

const filter = eventName => withFilter(
  () => pubsub.asyncIterator(eventName),
  // only notify those clients that have subscribed to the specific
  // board.
  (payload, variables) => variables.boardId === payload.boardId
)

module.exports.actions = {
  BOARD_ADDED,
  CARD_ADDED,
  CARD_UPDATED,
  CARD_DELETED,
  SECTION_ADDED,
  SECTION_DELETED
}

module.exports.subscriptions = {
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
}