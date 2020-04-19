import { Component, Input, ViewChild, OnInit } from '@angular/core';
import rough from 'roughjs/bundled/rough.esm.js';

@Component({
  selector: 'app-idea-card',
  template: `
    <div
      [ngClass]="{'ib-card': true, 'editing': editing }"
      [ngStyle]="{'width.px': chosenDimensions[2] || 230, 'height.px': chosenDimensions[3] || 160}"
      tabindex="0"
    >
      <div class="pin-wrapper" *ngIf="withPin">
        <div id="push-pin" [ngClass]="{'edit': editing, 'alt-color': !editable}" pin></div>
      </div>
      <div
        class="ib-card-content"
        [style.color]="color"
        [style.fontSize]="fontSize || '1.1rem'"
      >
        <ng-content></ng-content>
      </div>
      <svg #svg></svg>
    </div>
  `,
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {
  private roughSvg: any;
  private node: any;
  public chosenDimensions: [number, number, number, number];
  // angle: number;
  @Input() text: string;
  @Input() backgroundColor: string;
  @Input() borderColor: string;
  @Input() color: string;
  @Input() fillStyle: string;
  @Input() roughness: number;
  @Input() fontSize: string;
  @Input() editing: boolean;
  @Input() withPin: boolean;
  @Input() hachureGap: number;
  @Input() strokeWidth: number;
  @Input() dimensions: [number, number, number, number];
  @Input() editable = false;

  @ViewChild('svg', { static: true }) svg;

  ngOnInit() {
    // this.angle = Math.floor(Math.random() * 3) - 1;
    this.roughSvg = rough.svg(this.svg);

    this.chosenDimensions = this.dimensions || [ 5, 5, 230, 160];

    this.node = this.roughSvg.rectangle(...this.chosenDimensions, {
      roughness: this.roughness || 0.9,
      fill: this.backgroundColor || 'pink',
      fillStyle: this.fillStyle || 'solid',
      stroke: this.borderColor || 'black',
      hachureGap: this.hachureGap || 0,
      strokeWidth: this.strokeWidth || .5
    })
    // let outline = this.node.querySelector('path:last-child');
    // outline.setAttribute('style', 'stroke-width: 1; fill: none;')
    // outline.setAttribute('class', 'card-outline')
    this.svg.nativeElement.appendChild(this.node)

    // this.node = this.roughSvg.path('M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z', {
    //   // fill: 'red',
    //   roughness: this.roughness || 2.5,
    //   fill: this.backgroundColor || 'pink',
    //   // hachureAngle: 60,
    //   // hachureGap:5,
    //   fillStyle: this.fillStyle || 'solid',
    //   stroke: this.borderColor || 'black',
    //   strokeWidth: 10,
    //   // viewBox: '0 0 800 800',
    //   // width: '25'
    // })

    // this.svg.nativeElement.appendChild(this.node)
  }
}