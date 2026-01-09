import {ChangeDetectorRef, Component, inject, OnInit, signal, OnDestroy} from '@angular/core';
import {CharacterModel} from '../../shared/models/character.model';
import {CharacterService} from '../../shared/services/character-service';
import {CharactersList} from './components/characters-list/characters-list';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersList
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit, OnDestroy {

  protected characters = signal<CharacterModel[]>([]);
  protected section = signal('');
  protected breadcrumb = signal('');

  private characterService = inject(CharacterService);
  private activatedRoute = inject(ActivatedRoute);
  // Subscriptions.
  // private subscriptions: Subscription[] = [];
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.getAllCharacters();
    this.getActivatedRouteData();
  }

  private getAllCharacters () {
    this.subscriptions.push(this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
      this.characters.set(allCharacters);
    }));
  }

  private getActivatedRouteData() {
    this.subscriptions.push(this.activatedRoute.data.subscribe((data) => {
      this.section.set(data['section']);
      this.breadcrumb.set(data['breadcrumb']);
    }))
  }

  ngOnDestroy() {
    // Implémenter notre logique.
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
