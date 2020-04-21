import gql from 'graphql-tag';

export const SectionAdded = gql`
  subscription SectionAdded($boardId: String!) {
    sectionAdded(boardId: $boardId) {
      __typename
      title
      id: _id
      cards {
        text
        title
      }
    }
  }
`

export const CardAdded = gql`
  subscription CardAdded($boardId: String!) {
    cardAdded(boardId: $boardId){
      text
      creator {
        name
        identityHash
      }
      createdAt
      id: _id
      sectionId
    }
  }
`

export const CardUpdated = gql`
  subscription CardUpdated($boardId: String!) {
    cardUpdated(boardId: $boardId){
      text
      creator {
        name
        identityHash
      }
      createdAt
      id: _id
      sectionId
      likedBy
    }
  }
`

export const CardDeleted = gql`
  subscription CardDeleted($boardId: String!) {
    cardDeleted(boardId: $boardId){
      id: _id
      sectionId
    }
  }
`

export const SectionDeleted = gql`
  subscription SectionDeleted($boardId: String!) {
    sectionDeleted(boardId: $boardId){
      id: _id
    }
  }
`

export const BoardAdded = gql`
  subscription BoardAdded {
    boardAdded {
      title
    }
  }
`