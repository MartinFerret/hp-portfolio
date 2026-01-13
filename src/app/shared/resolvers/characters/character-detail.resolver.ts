import {ResolveFn} from '@angular/router';
import {CharacterModel} from '../../models/character.model';
import {CharacterService} from '../../services/characters/character-service';
import {inject} from '@angular/core';
import {map} from 'rxjs';

export const characterDetailResolver: ResolveFn<CharacterModel | null> = (route) => {
  const characterService = inject(CharacterService);
  const id = route.paramMap.get('id');

  if (!id) {
    return null;
  }

  return characterService.getCharacterById(id).pipe(map((characters) => characters[0] ?? null));
}
