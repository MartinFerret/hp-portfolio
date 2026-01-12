import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterModel} from '../../models/character.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private httpClient = inject(HttpClient);

  getAllCharacter() : Observable<CharacterModel[]> {
    return this.httpClient.get<CharacterModel[]>(environment.baseUrl + '/characters');
  }

  getCharacterById (id: string): Observable<CharacterModel[]> {
    return this.httpClient.get<CharacterModel[]>(environment.baseUrl + '/character/' + id);
  }
}
