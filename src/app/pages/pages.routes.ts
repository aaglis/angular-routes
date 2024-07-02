import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    loadComponent: () => import('./sobre/sobre.component').then( p => p.SobreComponent)
  },
  {
    path: 'contato/:id',
    title: 'Contato',
    component: ContatoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
