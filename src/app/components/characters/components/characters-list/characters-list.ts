import {Component, inject, input} from '@angular/core';
import {CharacterModel} from '../../../../shared/models/character.model';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-characters-list',
  imports: [
    RouterLink
  ],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  private router = inject(Router);
  // Mode signal.
  characters = input.required<CharacterModel[]>();

  protected goToCharacterDetail(id: string) {
    this.router.navigate(['/characters', id]);
  }
}
