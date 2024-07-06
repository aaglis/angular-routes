import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { canActivateGuard } from '../guard/can-activate.guard';
import { canDeactivateGuard } from '../guard/can-deactivate.guard';

export const pagesRoutes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'sobre',
    title: 'Sobre',
    //lazy load component. pode-se remover o .then de definir a classe do componente como 'default'
    loadComponent: () => import('./sobre/sobre.component').then( p => p.SobreComponent),
    canActivate: [canActivateGuard]
  },
  {
    path: 'contato/:id',
    title: 'Contato',
    component: ContatoComponent,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
