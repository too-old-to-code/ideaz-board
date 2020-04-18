import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoardActivityService } from '@services/board-activity.service';
import { BrowserStorageService } from '@services/browser-storage.service';
import {Apollo} from 'apollo-angular';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public accessPin: string | null;
  public cogIcon = faCog;
  public lockIcon = faLock;
  public settingsActive = false;
  public sectionNameIdeas = [
    {text: 'What went well?', selected: false },
    {text: 'What could be improved?', selected: false },
    {text: 'Keep doing', selected: false },
    {text: 'Start doing', selected: false },
    {text: 'Stop doing', selected: false },
    {text: 'Less of', selected: false },
    {text: 'More of', selected: false },
    {text: 'Action items', selected: false },
    {text: 'Pros', selected: false },
    {text: 'Cons', selected: false },
    {text: 'Risks', selected: false },
    {text: 'Opportunities', selected: false },
    {text: 'Assumptions', selected: false },
    {text: 'Thanks', selected: false }

  ]
  constructor(
    private router: Router,
    private boardActivitySvc: BoardActivityService,
    private browserStorageSvc: BrowserStorageService

  ) {}

  handleSelectSectionClick (sectionName) {
    sectionName.selected = !sectionName.selected
  }

  handlePincodeEntry (pincode: string) {
    this.accessPin = pincode;
    this.toggleSettingsPanel();
  }

  toggleSettingsPanel () {
    this.settingsActive = !this.settingsActive;
  }

  handleCreateBoardClick (boardTitle: string) {
    const selectedSections = this.sectionNameIdeas.filter(section => section.selected).map(section => section.text)
    this.boardActivitySvc.createBoard(
      this.browserStorageSvc.user,
      selectedSections,
      boardTitle,
      this.accessPin
    ).subscribe((newBoard: any) => {
      if (newBoard) {
        this.router.navigate(['/board/', newBoard.data.addBoard.id])
      }
    })
  }
}