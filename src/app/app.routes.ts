import { Routes } from '@angular/router';
import {Home} from './core/home/home';
import {Notfound} from './core/notfound/notfound';
import {inject} from '@angular/core';
import {CharacterService} from '@services/characters/character-service';
import {StaffService} from '@services/staff/staff';
import {characterDetailResolver} from '@resolvers/characters/character-detail.resolver';
import {HouseService} from '@services/house/house-service';
import {houseDetailResolver} from '@resolvers/houses/house-detail-resolver';
import {authGuard} from '@guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    canActivate: [authGuard],
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
        resolve: {
          character: characterDetailResolver
        }
      }
    ],
  },
  {
    path: 'houses',
    children: [
      {
        path: '',
        loadComponent: () => import('./components/houses/houses').then(component => component.Houses),
        title: 'Houses',
        resolve: {
          houses: () => inject(HouseService).getAllHouses()
        }
      },
      {
        path: ':houseName',
        loadComponent: () => import('./components/house-detail/house-detail').then(component => component.HouseDetail),
        title: 'Houses',
        resolve: {
          house: houseDetailResolver
        }
      }
    ]
  },
  {
    path: 'staff',
    loadComponent: () => import('./components/staff/staff').then(component => component.Staff),
    title: 'HP - Staff',
    data: {
      section: 'Harry Potter',
      breadcrumb: 'Staff'
    },
    resolve: {
      staff: () => inject(StaffService).getAllStaff()
    }
  },
  { path: '**', component: Notfound, title: 'Not Found'}
];
