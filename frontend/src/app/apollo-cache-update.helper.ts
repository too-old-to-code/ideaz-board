import { GetBoard } from '../graphql/queries';

interface EntityIDs {
  boardId: string;
  cardId?: string;
  sectionId?: string;
}

const getBoard = (boardId: string) => ({
  query: GetBoard,
  variables: { boardId }
})

const findById = (id) => (item) => item.id === id;

export const cacheUpdateCardSub = (prev: any, { subscriptionData }) => {
  const { sections } = prev.getBoard;
  const { cardUpdated } = subscriptionData.data;
  const sectionToBeUpdated = sections.find(section => section.id === cardUpdated.sectionId);
  const cardToUpdate = sectionToBeUpdated.cards.find(card => card.id === cardUpdated.id);

  if (!cardToUpdate) {
    sectionToBeUpdated.cards.push(cardUpdated);
  }
  return prev
}

export const cacheRemoveCardSub = (prev: any, { subscriptionData}) => {
  const { sections } = prev.getBoard;
  const { id: cardId, sectionId } = subscriptionData.data.cardDeleted;
  const sectionToBeUpdated = sections.find(section => section.id === sectionId);
  sectionToBeUpdated.cards = sectionToBeUpdated.cards.filter(card => card.id !== cardId)
  return prev
}

export const cacheRemoveSectionSub = (prev: any, { subscriptionData }) => {
  const { sections } = prev.getBoard;
  const { id: sectionId } = subscriptionData.data.sectionDeleted;
  prev.getBoard.sections = sections.filter(section => section.id !== sectionId)
  return prev
}

export const cacheAddSectionSub = (prev: any, { subscriptionData}) => {
  return {
    ...prev,
    getBoard: {
      ...prev.getBoard,
      sections: [
        ...prev.getBoard.sections,
        subscriptionData.data.sectionAdded
      ]
    }
  }
}

export const cacheCreateCard = ({boardId, sectionId}: EntityIDs) =>
  (store, { data: { addCard }}: any) => {
    // Read the data from the cache for this query.
    const data: any = store.readQuery(getBoard(boardId));

    // Find the section the card belongs to
    const chosenSection = data.getBoard.sections.find(section => section.id === sectionId);

    // Add the card to the section
    chosenSection.cards.push({...addCard, editing: true})

    // Write the data back to the cache.
    store.writeQuery({...getBoard(boardId), data});
  }

export const cacheUpdateCardVotes = ({boardId, sectionId}: EntityIDs) =>
  (store, { data }: any) => {
    console.log(data)

  }

export const cacheUpdateCard = ({boardId, sectionId}: EntityIDs) =>
    (store, { data: { updateCard } }: any) => {
    // Read the data from the cache for this query.
    const data: any = store.readQuery(getBoard(boardId));

    // Find the section the card belongs to
    const chosenSection = data.getBoard.sections.find(section => section.id === sectionId);

    const alreadyHasCard = chosenSection.cards.find(c => c.id === updateCard.id)

    // if the section doesn't have the card, we need to add it to the section
    if (!alreadyHasCard){
      chosenSection.cards.push(updateCard)
      // Write the data back to the cache.
      store.writeQuery({...getBoard(boardId), data});
    }
  }

export const cacheDeleteCard = ({boardId, sectionId, cardId}: EntityIDs) =>
  store => {
    // Read the data from the cache for this query.
    const data: any = store.readQuery(getBoard(boardId));

    // Find the section from which to remove the card
    const chosenSection = data.getBoard.sections.find(s => s.id === sectionId);

    // Remove the card from the section
    chosenSection.cards = chosenSection.cards.filter(c => c.id !== cardId);

    // Write the data back to the cache.
    store.writeQuery({...getBoard(boardId), data});
  }

export const cacheCreateSection = ({ boardId }: EntityIDs) =>
  (store, { data: { addSection } }: any) => {
    // Read the data from the cache for this query.
    const data: any = store.readQuery(getBoard(boardId));

    const alreadyHasSection = data.getBoard.sections.some(findById(addSection.id))

    if (!alreadyHasSection){
      // Add our section from the mutation to the end.
      data.getBoard.sections.push(addSection);
      // Write the data back to the cache.
      store.writeQuery({ ...getBoard(boardId), data });
    }
  }

export const cacheDeleteSection = ({ boardId, sectionId }: EntityIDs) =>
  store => {
    // Read the data from the cache for this query.
    const data: any = store.readQuery(getBoard(boardId));

    // remove section from board
    data.getBoard.sections = data.getBoard.sections.filter(s => s.id !== sectionId);

    store.writeQuery({ ...getBoard(boardId), data });
  }
