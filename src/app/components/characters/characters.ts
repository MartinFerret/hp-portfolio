import {Component, inject, computed, Signal} from '@angular/core';
import {CharactersList} from './components/characters-list/characters-list';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {CharacterModel} from '@models/character.model';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersList
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected characters: Signal<CharacterModel[]> = computed(() => this.routeData()['characters']);
  protected section: Signal<string> = computed(() => this.routeData()['section']);
  protected breadcrumb: Signal<string> = computed(() => this.routeData()['breadcrumb']);
}
