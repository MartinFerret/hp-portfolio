import {ResolveFn} from '@angular/router';
import {CharacterModel} from '../models/character.model';
import {inject} from '@angular/core';
import {CharacterService} from '../services/characters/character-service';

export const charactersResolver: ResolveFn<CharacterModel[]> =
  () => inject(CharacterService).getAllCharacter();
