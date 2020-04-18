import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-tape',
  template: `
    <div
      class="board-tape"
      [ngStyle]="{
        top: vertical ? '-13%' : 0,
        height: vertical ? '110%' : '30px',
        margin: vertical ? '5px 10px': '10px',
        width: vertical ? '30px': 'calc(100% - 50px)',
        transform: 'rotateZ(' + angle + 'deg)',
        left: vertical ? 0 : '10px'
      }"
    ></div>
  `,
  styles: [`
    .board-tape {
      min-width: 30px;
      display: block;
      position: relative;
      background: rgba(255,255,200, 0.6);
      box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    }
  `]
})
export class BoardTapeComponent implements OnInit {
  @Input() vertical: boolean;
  angle: number;
  ngOnInit () {
    this.angle = Math.floor(Math.random() * 3) - 1;
  }
}