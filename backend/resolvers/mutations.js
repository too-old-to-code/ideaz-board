const pubsub = require('./pubsub');

const {
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
} = require('../db-queries')

const {
  BOARD_ADDED,
  CARD_ADDED,
  CARD_UPDATED,
  CARD_DELETED,
  SECTION_ADDED,
  SECTION_DELETED
} = require('./subscriptions').actions;

let timer = () => new Promise((res, rej) => {
  setTimeout(() => {
    res()
  }, 3000)
})

module.exports = {

  updateCardVotes: async (parent, { cardId, boardId, sectionId }, ctx) => {
    let updatedCard = await updateCardVotes(cardId, ctx.requestor.identityHash);
    pubsub.publish(CARD_UPDATED, { cardUpdated: {...updatedCard, sectionId} , boardId: boardId });
    return updatedCard;
  },

  unlockBoard: async (parent, { boardId, pin }, ctx) => {
    const response = await unlockBoard(boardId, pin, ctx.requestor.identityHash);
    return 'success'
  },

  addBoard: async (parent, { newBoard, sectionNames }, { requestor }, info) => {
    return createBoard(newBoard, sectionNames, requestor);
  },

  addSection: async (parent, { newSection }, context)=> {
    const section = await createSection(newSection);
    // await timer();
    await addSectionToBoard(section, newSection.boardId);
    pubsub.publish(SECTION_ADDED, { sectionAdded: section, boardId:newSection.boardId });
    return section;
  },

  addCard: async (parent, { newCard, boardId }, ctx) => {
    const card = await createCard(newCard, ctx.requestor);
    await addCardToSection(card);
    pubsub.publish(CARD_ADDED, { cardAdded: card, boardId });
    return card;
  },

  updateCard: async (parent, { cardChanges: card, boardId }) => {
    let updatedCard = await updateCard(card);
    pubsub.publish(
      CARD_UPDATED,
      { cardUpdated: { ...updatedCard, _id: updatedCard.id },
      boardId: boardId
    });
    return updatedCard
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