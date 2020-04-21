import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardActivityService } from '@services/board-activity.service';
import { ColorProviderService } from '@services/color-provider.service';
import { ExportBoardService } from '@services/export-board.service';
import { BrowserStorageService } from '@services/browser-storage.service';
import { CardStyle, Section, Board, Card, AccessState } from '@models';
import { GetBoard } from '../../graphql/queries';
import { take, pluck, map, switchMap, catchError, tap } from 'rxjs/operators';
import { EMPTY, Observable, throwError } from 'rxjs';
import { faTrashAlt, faPlusSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import copy from 'copy-text-to-clipboard';

type CardBeingEdited = {
  id: string;
  parentSectionId: string
}

enum View {
  Clean = 'CLEAN',
  Artsy = 'ARTSY'
}

@Component({
  selector: 'app-home-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit, OnDestroy {
  private subscription: any;
  private boardId: string;
  private _cardBeingEdited: CardBeingEdited | null;

  public boardTitle: string;
  public boardCreator: any;
  public isAddingSection = false;
  public sections$: Observable<any>;
  public board$: Observable<any>;
  public view: View;
  public accessState = AccessState.Checking;
  // icons for use in template
  public trashIcon = faTrashAlt;
  public plusIcon = faPlusSquare;
  public thumbsUp = faThumbsUp;


  constructor(
    private boardActivitySvc: BoardActivityService,
    private route: ActivatedRoute,
    private exportSvc: ExportBoardService,
    private colorProvider: ColorProviderService,
    private browserStorageSvc: BrowserStorageService
  ) {}

  /***********************************************************************************
                               LIFECYCLE METHODS
  ************************************************************************************/

  ngOnInit () {
    this.view = View.Artsy;
    this.cardBeingEdited = null;
    this.subscription = this.getBoard();
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  /***********************************************************************************
                               GETTERS / SETTERS
  ************************************************************************************/

  get username () {
    return this.browserStorageSvc.username;
  }

  get userIdentityHash () {
    return this.browserStorageSvc.userIdentityHash
  }

  // The idea of this setter method is to save any card as it exits edit mode.
  // i.e, when it is pinned back to the board.
  set cardBeingEdited (card: CardBeingEdited) {
    const noNewCardWasSelected = () => card == null;
    const selectedCardWasClickedAgain = () => this._cardBeingEdited.id === card.id;
    const aCardIsAlreadySelected = () => !!this._cardBeingEdited;
    const aCardWasSelected = () => card != null;

    if (aCardIsAlreadySelected()) {
      // Save the card
      this.saveCurrentlySelectedCard$(this._cardBeingEdited).subscribe();

      if (noNewCardWasSelected() || selectedCardWasClickedAgain()) {
        // Exit editing mode
        this._cardBeingEdited = null;

      } else {
        // Swap the card being edited
        this._cardBeingEdited = { id: card.id, parentSectionId: card.parentSectionId };
      }
    } else if (aCardWasSelected()) {
      // Enter edit mode with selected card
      this._cardBeingEdited = { id: card.id, parentSectionId: card.parentSectionId };
    }
  }

  get cardBeingEdited () {
    return this._cardBeingEdited
  }

  /***********************************************************************************
                               HELPER METHODS
  ************************************************************************************/

  // prevent unnecessary re-rendering of existing cards
  trackById(index, item) {
    return item.id;
  }

  userIsAuthor (identityHash) {
    return identityHash === this.userIdentityHash;
  }

  getColorForSection (num: number) {
    return this.colorProvider.colorAtIndex(num);
  }

  resetCreateSectionCard (sectionTitle) {
    sectionTitle.value = '';
    this.isAddingSection = false;
  }

  isEditing (cardId) {
    return this.cardBeingEdited && this.cardBeingEdited.id === cardId
  }

  filterById (searchId) {
    return arrayOfObjects => arrayOfObjects.filter(obj => obj.id === searchId)
  }

  changeTextOnCurrentCard (event, card) {
    card.text = event.target.value;
  }

  /***********************************************************************************
                               CRUD ACTIONS
  ************************************************************************************/

  getBoard () {
    return this.route.params.subscribe(params => {
      this.boardId = params && params.id

      this.board$ = this.boardActivitySvc.getBoard(this.boardId)
        .pipe(
          catchError((err: any) => {
          if(err.graphQLErrors) {
            const requiresPincode = err.graphQLErrors.some((graphQLError: any) => graphQLError.message === 'Access pin required');
            if (requiresPincode) {
              this.accessState = AccessState.Denied
            }
          }
          return throwError(err)
        }),
        tap((board: any) => {
          this.accessState = AccessState.Permitted
          this.boardCreator = board.creator;
          this.boardTitle = board.title
        })
      )

      this.sections$ = this.board$.pipe(pluck('sections'))
    });
  }

  updateVotes (card: Card, section: Section) {
    this.boardActivitySvc.updateCardVotes(
      this.boardId,
      card.id,
      section.id
    ).subscribe()
  }

  sendPin (number: string) {
    // send boardId, and pin
    this.boardActivitySvc.unlockBoard(this.boardId, number)
      .subscribe((response: any) => {
        this.accessState = AccessState.Checking
        this.subscription = this.getBoard()
      })
  }

  createCard (section) {
    if (this.isAddingSection) return
    this.boardActivitySvc.createCard(section.id, this.boardId)
      .subscribe((card: Card) => {
        // don't need to return this.
        this.cardBeingEdited = { id: card.id, parentSectionId: section.id }
      })
  }

  changeAndSaveCard (event, card, section) {
    this.changeTextOnCurrentCard(event, card)
    this.cardBeingEdited = { id: card.id, parentSectionId: section.id }
  }

  createSection (sectionTitle) {
    this.boardActivitySvc.createSection(this.boardId, sectionTitle.value).subscribe()
    this.resetCreateSectionCard(sectionTitle);
  }

  saveCard (evt, card, section) {
    const userIsCardAuthorOrBoardCreator = () =>
      this.userIsAuthor(this.boardCreator.identityHash) || this.userIsAuthor(card.creator.identityHash);

    if (this.isAddingSection) return
    if (!userIsCardAuthorOrBoardCreator()) return;

    if (evt.target.hasAttribute('pin')) {
      this.cardBeingEdited = { id: card.id, parentSectionId: section.id }
    }
  }

  deleteCard (event, card, section) {
    this.boardActivitySvc.deleteCard(card, section, this.boardId).subscribe();
  }

  deleteSection (section, event) {
    event.preventDefault();
    event.stopPropagation();
    this.boardActivitySvc.deleteSection(section, this.boardId).subscribe()
  }

  saveCurrentlySelectedCard$ (cardToFind: CardBeingEdited) {
    return this.sections$.pipe(
      take(1),
      map(this.filterById(cardToFind.parentSectionId)),
      pluck('0','cards'),
      map(this.filterById(cardToFind.id)),
      pluck('0'),
      switchMap(card => card ? this.boardActivitySvc.saveCard(cardToFind.parentSectionId, card, this.boardId) : EMPTY)
    )
  }

  /***********************************************************************************
                               NAVBAR ACTIONS
  ************************************************************************************/

  exportAsPdf (title) {
    this.sections$.pipe(take(1)).subscribe(sections => {
      this.exportSvc.exportAsPdf(title, sections)
    })
  }

  addToClipboard () {
    copy(window.location.href)
  }

  addSection () {
    this.cardBeingEdited = null;
    this.isAddingSection = !this.isAddingSection;
  }

  changeView () {
    this.view = this.view === View.Artsy ? View.Clean : View.Artsy;
  }
}
