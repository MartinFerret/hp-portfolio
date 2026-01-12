import { Routes } from '@angular/router';
import {Home} from './core/home/home';
import {Notfound} from './core/notfound/notfound';
import {inject} from '@angular/core';
import {CharacterService} from './shared/services/characters/character-service';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    children: [
      {
        path: '',
        loadComponent: () => import('./components/characters/characters')
          .then(component => component.Characters),
        title: 'Characters',
        data: {
          section: 'Harry Potter',
          breadcrumb: 'Characters'
        },
        resolve: {
          characters: () => inject(CharacterService).getAllCharacter()
        }
      },
      {
        path: ':id', loadComponent: () => import('./components/character-detail/character-detail').then(component => component.CharacterDetail),
        title: 'Character Detail',
      }
    ],
  },
  {
    path: 'staff',
    loadComponent: () => import('./components/staff/staff').then(component => component.Staff),
    title: 'HP - Staff',
    data: {
      section: 'Harry Potter',
      breadcrumb: 'Staff'
    }
  },
  { path: '**', component: Notfound, title: 'Not Found'}
];
