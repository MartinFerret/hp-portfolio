import { ResolveFn } from '@angular/router';
import {CharacterHouse} from '../../models/characterHouse.model';
import {inject} from '@angular/core';
import {HouseService} from '../../services/house/house-service';

export const houseDetailResolver: ResolveFn<CharacterHouse[]> = (route) => {
  const houseName = route.paramMap.get('houseName');
  return inject(HouseService).getCharactersByHouse(houseName ?? '');
};
