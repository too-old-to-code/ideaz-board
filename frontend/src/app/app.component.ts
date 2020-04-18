import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from '@services/browser-storage.service';
import { BoardActivityService } from '@services/board-activity.service';
import { User } from '@models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ideaz-board';
  user: User;
  token: string;

  constructor (
    private browserStorageSvc: BrowserStorageService,
    private boardActivitySvc: BoardActivityService
  ) {}

  ngOnInit () {
    this.user = this.browserStorageSvc.user;
    this.token = this.browserStorageSvc.token;
  }

  addUser (username, password) {
    if (!(username && password)) return;
    this.boardActivitySvc.getUserToken(username, password)
      .subscribe((result: any) => {
        this.token = result.data.getUserToken;
        this.browserStorageSvc.token = result.data.getUserToken
      })

    const user: User = { username, password };
    this.browserStorageSvc.user = user;
    this.user = user;
  }
}
