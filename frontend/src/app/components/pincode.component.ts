import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pincode',
  template: `
    <div class="access-pin" (keyup)="handleKeyup($event)">
      <label for="pincode-first-char">
        <ng-content></ng-content>
      </label>
      <input
        id="pincode-first-char"
        type="password"
        class="single-digit"
        maxlength="1"
        activeFocus
      />
      <input
        type="password"
        class="single-digit"
        maxlength="1"
        *ngFor="let char of characters; index as i;"
        (keyup)="handleLastPinKey($event, i)"
      />
    </div>
  `,
  styles: [`
    .access-pin {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .single-digit {
      width: 20px;
      margin: 0 1px;
      text-align: center;
    }

    .access-pin {
      justify-content: center;
    }
  `]
})
export class PincodeComponent implements OnInit {
  @Input() pincodeLength: number;
  @Output() pincodeEntered = new EventEmitter();
  private _characters: any[];
  private pincode = '';

  ngOnInit () {
    this._characters = new Array(this.pincodeLength - 1); // minus 1 for the extra input outside the loop
  }

  get characters () {
    return this._characters;
  }

  get lastPinIndex () {
    return this._characters.length - 1;
  }

  handleKeyup (e) {
    this.pincode = this.pincode + e.target.value;
    let next = new ElementRef(e.target.nextElementSibling);
    next.nativeElement.focus();
  }

  handleLastPinKey (e, index) {
    if (index !== this.lastPinIndex) return;
    e.stopPropagation();
    this.pincodeEntered.emit(this.pincode + e.target.value);
    this.pincode = '';
  }
}