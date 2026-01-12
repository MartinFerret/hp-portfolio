import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {StaffModel} from '../../models/staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private httpClient = inject(HttpClient);

  getAllStaff (): Observable<StaffModel[]> {
    return this.httpClient.get<StaffModel[]>(environment.baseUrl + '/characters/staff');
  }
}
