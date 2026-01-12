import { Component, inject, computed} from '@angular/core';
import {CharacterService} from '../../shared/services/characters/character-service';
import {CharactersList} from './components/characters-list/characters-list';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersList
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

  private characterService = inject(CharacterService);
  private activatedRoute = inject(ActivatedRoute);

  protected characters = toSignal(this.characterService.getAllCharacter(), {initialValue: []})

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected section = computed(() => this.routeData()['section']);
  protected breadcrumb = computed(() => this.routeData()['breadcrumb']);
}
