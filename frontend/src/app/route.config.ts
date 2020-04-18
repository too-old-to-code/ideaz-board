import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { BoardPageComponent } from './pages/board-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'board/:id',
    component: BoardPageComponent
  }
]