import {Component, computed, effect, inject, Signal} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CharacterModel} from '../../shared/models/character.model';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private titleService = inject(Title);
  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected character: Signal<CharacterModel> = computed(() => this.routeData()['character']);

  constructor() {
    effect(() => {
      this.titleService.setTitle('Character - ' + (this.character()?.name ?? 'Unknown'));
    })
  }
}
