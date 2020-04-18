import { Component, EventEmitter, Output, Input, ElementRef } from '@angular/core';
import { AccessState } from '@models';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div *ngIf="accessState === accessStates.Permitted" class="navbar-content">
        <div class="nav-title ">
          <div class="nav-user" *ngIf="boardTitle">
            {{boardTitle}}
          </div>
        </div>
        <span class="routes">
          <div class="nav-item">
            <span class="nav-link" (click)="changeView.emit()">
              VIEW: {{viewStyle}}
            </span>
          </div>
          <div class="nav-item">
            <span class="nav-link" (click)="addToClipboard.emit()">
              COPY URL
            </span>
          </div>
          <div class="nav-item">
            <span class="nav-link" (click)="exportAsPdf.emit()">
              EXPORT
            </span>
          </div>
          <div class="nav-item">
            <span class="nav-link" (click)="addSection.emit()">
              +SECTION
            </span>
          </div>
        </span>
      </div>
      <div *ngIf="accessState === accessStates.Denied" class="access-pin">
        <app-pincode [pincodeLength]="4" (pincodeEntered)="handlePinEntry($event)">
          <div class="nav-title nav-user">This board is pin protected:</div>
        </app-pincode>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() boardTitle: string;
  @Input() viewStyle: string;
  @Input() accessState: AccessState;
  @Output() addSection = new EventEmitter();
  @Output() exportAsPdf = new EventEmitter();
  @Output() addToClipboard = new EventEmitter();
  @Output() changeView = new EventEmitter();
  @Output() sendPin = new EventEmitter();
  public accessStates = AccessState;
  private pincode = '';

  handlePinEntry (pincode: string) {
    this.sendPin.emit(pincode);
  }

}