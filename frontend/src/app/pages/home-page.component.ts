import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoardActivityService } from '@services/board-activity.service';
import { BrowserStorageService } from '@services/browser-storage.service';
import { Apollo } from 'apollo-angular';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { sectionNames } from '../defaults/section-names';

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
  public sectionNameIdeas = sectionNames.map(name => ({text: name, selected: false }));

  constructor(
    private router: Router,
    private boardActivitySvc: BoardActivityService,
    private browserStorageSvc: BrowserStorageService
  ) {}

  handleSelectSectionClick (sectionName): void {
    sectionName.selected = !sectionName.selected
  }

  handlePincodeEntry (pincode: string) {
    this.accessPin = pincode;
    // close the settings panel once a pin is entered
    this.toggleSettingsPanel();
  }

  toggleSettingsPanel (): void {
    this.settingsActive = !this.settingsActive;
    // reset the pin every time the settings panel is opened
    if (this.settingsActive) this.accessPin = null;
  }

  handleCreateBoardClick (boardTitle: string): void {
    const selectedSections = this.sectionNameIdeas.filter(section => section.selected).map(section => section.text)
    this.boardActivitySvc.createBoard(
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