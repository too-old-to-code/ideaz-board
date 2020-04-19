import gql from 'graphql-tag';

export const GetBoard = gql`
    query GetBoard($boardId: ID) {
      getBoard(boardId: $boardId){
        __typename
        title
        creator {
          identityHash
          name
        }
        sections {
          __typename
          id: _id
          cards {
            id: _id
            text
            author
            creator {
              identityHash
              name
            }
            likedBy
          }
          title
        }
      }
    }
`;

export const GetUserToken = gql`
  query GetUserToken($username: String!, $password: String!) {
    getUserToken(username: $username, password: $password)
  }
`

