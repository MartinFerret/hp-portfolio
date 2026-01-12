import {Component, effect, inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CharacterService} from '../../shared/services/characters/character-service';
import {CharacterModel} from '../../shared/models/character.model';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, switchMap} from 'rxjs';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private titleService = inject(Title);
  private characterService = inject(CharacterService);
  private activatedRoute = inject(ActivatedRoute);

  protected character = toSignal(
    this.activatedRoute.paramMap.pipe(
      map((params) => params.get('id')!),
      switchMap((id: string) => this.characterService.getCharacterById(id)),
      map((list: CharacterModel[]) => list[0] ?? null)
    ), { initialValue: null }
  )

  constructor() {
    effect(() => {
      this.titleService.setTitle('Character - ' + (this.character()?.name ?? 'Unknown'));
    })
  }
}
