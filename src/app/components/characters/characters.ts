import {ChangeDetectorRef, Component, inject, OnInit, signal} from '@angular/core';
import {CharacterModel} from '../../shared/models/character.model';
import {CharacterService} from '../../shared/services/character-service';
import {CharactersList} from './components/characters-list/characters-list';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersList
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit {

  private cdRef = inject(ChangeDetectorRef);

  // 1. Stocker toutes les données de l'API dans une variable - affichage html.
  //protected characters: CharacterModel[] = [];

  // Mode signal.
  protected characters = signal<CharacterModel[]>([]);

  // 2. Injecter notre character service.
  private characterService = inject(CharacterService);

  ngOnInit() {
    this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
      // Mode signal.
      this.characters.set(allCharacters);
      //this.characters = allCharacters;
      //this.cdRef.detectChanges();
    })
  }
}
