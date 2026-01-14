import {Component, inject, computed, Signal, signal} from '@angular/core';
import {CharactersList} from './components/characters-list/characters-list';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {CharacterModel} from '@models/character.model';
import {AddCharacter} from '@components/characters/components/add-character/add-character';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersList,
    AddCharacter
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

  private activatedRoute = inject(ActivatedRoute);

  protected showAddCharacter = signal(false);
  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected charactersCopy = signal<CharacterModel[]>([]);
  protected characters: Signal<CharacterModel[]> = computed(() => [...this.charactersCopy(), ...this.routeData()['characters']]);

  protected toggleAddCharacter() {
    this.showAddCharacter.update(show => !show);
  }

  protected getNewCharacter(character: CharacterModel) {
    this.charactersCopy.update(characters => [...characters, character]);
    this.showAddCharacter.set(false);
  }
}
