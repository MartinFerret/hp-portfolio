import {Component, Input, input} from '@angular/core';
import {CharacterModel} from '../../../../shared/models/character.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-characters-list',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  // @Input() characters: CharacterModel[] = [];

  // Mode signal.
  characters = input.required<CharacterModel[]>();

  protected trackById(index: number, character: CharacterModel) {
    return character.id;
  }
}
