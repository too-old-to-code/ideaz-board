import { Component } from '@angular/core';

@Component({
  selector: 'app-idea-section',
  template: `
    <section>
      <div>
        <div class="section-title">
          <ng-content select='.title'></ng-content>
        </div>
        <app-board-tape [vertical]="true"></app-board-tape>
        <div [style.width]="'100%'">
          <ng-content></ng-content>
        </div>
      </div>
      <app-board-tape></app-board-tape>
    </section>
  `,
  styles: [`
    section {
      height: 100%;
      margin: 30px 0;
    }
    section > div {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      margin-bottom: -20px;
    }

    app-board-tape {
      height: 100%;
    }
  `]
})
export class IdeaSectionComponent {}