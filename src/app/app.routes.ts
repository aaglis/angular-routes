import { Routes } from '@angular/router';
import { pagesRoutes } from './pages/pages.routes';
import { canActivateChildGuard } from './guard/can-activate-child.guard';
import { canMatchGuard } from './guard/can-match.guard';

export const routes: Routes = [
  {
    path: 'pages',
    title: 'Home',
    children: pagesRoutes,
    canMatch: [canMatchGuard]
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  }
];
