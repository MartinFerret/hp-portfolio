import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {CharacterHouse} from '../../models/characterHouse.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private readonly houses = signal(['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin']);
  private readonly httpClient = inject(HttpClient);

  getAllHouses() {
    return this.houses();
  }

  getCharactersByHouse(houseName: string): Observable<CharacterHouse[]> {
    return this.httpClient.get<CharacterHouse[]>(environment.baseUrl + '/characters/house/' + houseName);
  }
}
