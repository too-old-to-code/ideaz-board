import { Injectable } from '@angular/core';

export enum CardColor {
  Blue = '#e7e7fc',
  Green = '#d0f4d0',
  Orange = '#fce0ab',
  Purple = '#febffe',
  Red = '#ffcaca',
  Yellow = '#fafacc'
}

const sectionColors: CardColor[] = [
  CardColor.Red,
  CardColor.Orange,
  CardColor.Yellow,
  CardColor.Green,
  CardColor.Blue,
  CardColor.Purple
]

@Injectable({
  providedIn: 'root'
})
export class ColorProviderService {
  get colorCount () {
    return sectionColors.length
  }

  colorAtIndex (num: number) {
    return sectionColors[num % this.colorCount]
  }
}