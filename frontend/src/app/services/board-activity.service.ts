import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import shortid from 'shortid';

import {Apollo} from 'apollo-angular';
import { GetBoard, GetUserToken } from '../../graphql/queries';
import {
  CreateBoard,
  CreateSection,
  AddCard,
  UpdateCard,
  DeleteCard,
  DeleteSection,
  UnlockBoard,
  UpdateCardVotes
} from '../../graphql/mutations';
import { SectionAdded, CardAdded, CardUpdated, CardDeleted, SectionDeleted } from '../../graphql/subscriptions';
import { pluck, tap, catchError } from 'rxjs/operators';
import {
  cacheUpdateCardSub,
  cacheRemoveCardSub,
  cacheAddSectionSub,
  cacheRemoveSectionSub,
  cacheCreateCard,
  cacheUpdateCard,
  cacheDeleteCard,
  cacheCreateSection,
  cacheDeleteSection,
  cacheUpdateCardVotes
} from '../apollo-cache-update.helper'

@Injectable({
  providedIn: 'root'
})
export class BoardActivityService {
  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {}

  private generateId () {
    return shortid.generate();
  }

  unlockBoard(boardId: string, pin: string) {
    return this.apollo.mutate({
      variables: { boardId, pin },
      mutation: UnlockBoard
    })
  }

  getUserToken (username: string, password: string) {
    return this.apollo.query({
      variables: { username, password },
      query: GetUserToken
    })
  }

  getBoardTitle (boardId: string) {
    return this.apollo.query({
      variables: { boardId },
      query: GetBoard
    })
    .pipe(pluck('data','getBoard', 'title'))
  }

  getBoard (boardId: string) {
    let board = this.apollo
      .watchQuery({
        variables: { boardId },
        query: GetBoard
      })

    board.subscribeToMore({
      document: SectionAdded,
      variables: { boardId },
      updateQuery: cacheAddSectionSub
    })

    board.subscribeToMore({
      document: CardUpdated,
      variables: { boardId },
      updateQuery: cacheUpdateCardSub
    })

    board.subscribeToMore({
      document: CardDeleted,
      variables: { boardId },
      updateQuery: cacheRemoveCardSub
    })

    board.subscribeToMore({
      document: SectionDeleted,
      variables: { boardId },
      updateQuery: cacheRemoveSectionSub
    })

    return board.valueChanges
      .pipe(pluck('data','getBoard'))
  }

  updateCardVotes (boardId, cardId, sectionId) {
    return this.apollo.mutate({
      mutation: UpdateCardVotes,
      variables: {
        boardId,
        cardId,
        sectionId
      },
      // update: cacheUpdateCardVotes({ boardId, sectionId }),
    })
  }

  createBoard (sectionNames, boardTitle, accessPin) {
    const boardId = this.generateId ();

    return this.apollo.mutate({
      mutation: CreateBoard,
      variables: {
        sectionNames,
        newBoard: {
          title: boardTitle,
          accessPin
        }
      }
    })
  }

  createSection (boardId: string, sectionTitle) {
    return this.apollo.mutate({
      mutation: CreateSection,
      variables: {
        newSection: {
          boardId: boardId,
          title: sectionTitle
        }
      },
      update: cacheCreateSection({ boardId }),
      optimisticResponse: {
        __typename: 'Mutation',
        addSection: {
          __typename: 'Section',
          title: sectionTitle,
          cards: [],
          id: Math.round(Math.random() * -1000000)
        }
      }
    })
  }

  saveCard (sectionId: any, changes: any, boardId: string) {
    const { editing, __typename, creator, ...fields } = changes;
    return this.apollo.mutate({
      mutation: UpdateCard,
      variables: {
        cardChanges: {
          sectionId,
          ...fields
        },
        boardId
      },
      update: cacheUpdateCard({boardId, sectionId}),
      optimisticResponse: {
        __typename: 'Mutation',
        updateCard: {
          __typename: 'Card',
          sectionId,
          creator,
          ...fields
        }
      }
    })
  }

  createCard (sectionId: string, boardId: string) {
    const createdAt = String(Date.now());
    return this.apollo.mutate({
      mutation: AddCard,
      variables: {
        newCard: {
          sectionId,
          createdAt
        },
        boardId
      },
      update: cacheCreateCard({boardId, sectionId}),
      optimisticResponse: {
        __typename: "Mutation",
        addCard: {
          __typename: "Card",
          createdAt,
          sectionId,
          creator: null,
          id: Math.round(Math.random() * -1000000),
          text: '',
          likedBy: []
        }
      }
    })
    .pipe(pluck('data','addCard'))
  }

  deleteCard (card: any, section: any, boardId: string) {
    return this.apollo.mutate({
      mutation: DeleteCard,
      variables: { cardId: card.id, sectionId: section.id, boardId },
      update: cacheDeleteCard({boardId, sectionId: section.id, cardId: card.id}),
      optimisticResponse: {
        __typename: "Mutation",
        deleteCard: {
          __typename: "Card",
          ...card,
          sectionId: section.id
        }
      }
    })
  }

  deleteSection (section: any, boardId: string) {
    return this.apollo.mutate({
      mutation: DeleteSection,
      variables: { sectionId: section.id, boardId },
      update: cacheDeleteSection({boardId, sectionId: section.id})
    })
  }
}