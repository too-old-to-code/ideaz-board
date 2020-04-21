import gql from 'graphql-tag';

export const CreateSection = gql`
  mutation CreateSection($newSection: NewSectionInput){
    addSection(newSection: $newSection){
      id: _id
      title
    }
  }
`

export const UpdateCard = gql`
  mutation UpdateCard($cardChanges: UpdateCardInput, $boardId: String!){
    updateCard(cardChanges: $cardChanges, boardId: $boardId) {
      id: _id
      sectionId
      text
      createdAt
      creator {
        name
        identityHash
      }
    }
  }
`

export const UpdateSection = gql`
  mutation UpdateSection($sectionChanges: UpdateSectionInput){
    updateSection(sectionChanges: $sectionChanges) {
      title
    }
  }
`

export const CreateBoard = gql`
  mutation CreateBoard($newBoard: NewBoardInput, $sectionNames: [String]) {
    addBoard(newBoard: $newBoard, sectionNames: $sectionNames) {
      title
      id: _id
      sections{
        title
      }
    }
  }
`

export const AddCard = gql`
  mutation AddCard($newCard: NewCardInput, $boardId: String!) {
    addCard(newCard: $newCard, boardId: $boardId) {
      id: _id
      creator {
        name
        identityHash
      }
      createdAt
      text
      likedBy
      sectionId
    }
  }
`

export const DeleteCard = gql`
  mutation DeleteCard($cardId: String!, $sectionId: String!, $boardId: String!) {
    deleteCard(cardId: $cardId, sectionId: $sectionId, boardId: $boardId) {
      id: _id
      sectionId
    }
  }
`

export const DeleteSection = gql`
  mutation DeleteSection($sectionId: String!, $boardId: String!) {
    deleteSection(sectionId: $sectionId, boardId: $boardId) {
      id: _id
    }
  }
`

export const UnlockBoard = gql`
  mutation UnlockBoard($boardId: String!, $pin: String!) {
    unlockBoard(boardId: $boardId, pin: $pin)
  }
`

export const UpdateCardVotes = gql`
  mutation UpdateCardVotes($boardId: String!, $cardId: String!, $sectionId: String!) {
    updateCardVotes(boardId: $boardId, cardId: $cardId, sectionId: $sectionId) {
      likedBy
      id: _id
    }
  }
`
