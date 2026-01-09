import { Routes } from '@angular/router';
import {Home} from './core/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    loadComponent: () => import('./components/characters/characters')
      .then(component => component.Characters),
    title: 'Characters',
    data: {
      section: 'Harry Potter',
      breadcrumb: 'Characters'
    }
  }
];
