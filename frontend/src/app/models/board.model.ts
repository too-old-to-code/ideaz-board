import { Section } from './section.model';

export interface Board {
  id: string;
  title: string;
  creator: string;
  sections: Section[];
}