import { Routes } from '@angular/router';
import { pagesRoutes } from './pages/pages.routes';

export const routes: Routes = [
  {
    path: 'pages',
    title: 'Home',
    children: pagesRoutes
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  }
];
