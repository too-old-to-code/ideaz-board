require('./models')
const mongoose = require('mongoose');
const Board = mongoose.model('Board');
const Section = mongoose.model('Section');
const Card = mongoose.model('Card');


// module.exports.getBoardWithAllChildren = (boardId) => {
//   return [Board.findOne(boardId)
//     .populate({
//       path: 'sections',
//       populate: {
//         path: 'cards',
//         model: 'Card'
//       }
//     })]
// }

module.exports.getBoardWithAllChildren = async (boardId, requestorId) => {
  const board = await Board.findById(boardId)
    .populate({
      path: 'sections',
      populate: {
        path: 'cards',
        model: 'Card'
      }
    })

  if (!board.accessPinHash || board.creator === requestorId || board.authorizedUsers.includes(requestorId)) {
    return [board]
  }
  throw new Error ('Auth error')
  // if (board.accessPinHash) {
  //   const pinSuccess = await Board.compareHash('1234', board.accessPinHash)
  //   if (!pinSuccess) {
  //     throw new Error('Auth error')
  //   }
  // }
  // return [board]
}

module.exports.createBoard = async (board, sections, creator) => {
  const sectionsWithIds = await Section.insertMany(sections.map(section => ({ title: section })))
  board.sections = sectionsWithIds;
  if (board.accessPin) {
    const hash = await Board.createHash(board.accessPin);
    board = {...board, accessPinHash: hash}
  }
  return Board.create({...board, creator });
}

module.exports.createCard = (card, requestor) => {
  console.log('===========>', requestor)
  return Card.create({...card, creator: requestor});
}

module.exports.createSection = (section) => {
  return Section.create(section);
}

module.exports.updateSection = (sectionId, changes) => {
  return Section.findByIdAndUpdate(
    sectionId,
    changes,
    { new: true }
  )
}

module.exports.updateCard = async (card) => {
  return Card.findByIdAndUpdate(
    card.id,
    card,
    { new: true }
  ).lean()
}

module.exports.addSectionToBoard = (section, boardId) => {
  return Board.updateOne(
    {_id: boardId},
    {$push: { sections: section }}
  )
}

module.exports.addCardToSection = (card) => {
  return Section.updateOne(
    { _id: card.sectionId },
    { $push: { cards: card }}
  )
}

module.exports.removeSectionFromBoard = (sectionId, boardId) => {
  return Board.updateOne(
    { _id: boardId },
    { $pull: { sections: sectionId }}
  )
}

module.exports.deleteSection = async (sectionId) => {
  const section = await Section.findById(sectionId);
  return section.remove();
}

module.exports.deleteCard = (cardId) => {
  return Card.findByIdAndDelete(cardId).lean()
}

module.exports.removeCardFromSection = async (cardId, sectionId) => {
  return Section.updateOne(
    { _id: sectionId },
    { $pullAll: { cards: [cardId]}},
    { new: true }
  )
}

module.exports.unlockBoard = async (boardId, pin, requestorId) => {
  const board = await Board.findById(boardId);
  const authResult = await Board.compareHash(pin, board.accessPinHash);
  if (authResult) {
    board.authorizedUsers.push(requestorId);
    board.save()
  }
}

module.exports.updateCardVotes = async (cardId, requestorId) => {
  const card = await Card.findById(cardId);
  if (card.likedBy.includes(requestorId)) {
    card.likedBy = card.likedBy.filter(id => id !== requestorId)
  } else {
    card.likedBy.push(requestorId)
  }
  await card.save();
  return card.toObject()
}

