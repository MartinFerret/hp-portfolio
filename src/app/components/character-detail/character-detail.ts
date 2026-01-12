import {Component, inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CharacterService} from '../../shared/services/characters/character-service';
import {CharacterModel} from '../../shared/models/character.model';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private titleService = inject(Title);
  private characterService = inject(CharacterService);

  constructor() {
    this.characterService.getCharacterById("ca3827f0-375a-4891-aaa5-f5e8a5bad225").subscribe((character: CharacterModel[]) => {
      console.log(character);
    })
  }
}
