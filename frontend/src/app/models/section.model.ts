import { Card } from './card.model';

export interface Section {
  id: string;
  title: string;
  position?: number;
  boardId: string;
  cards: Card[];
}