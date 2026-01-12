import {Component, inject} from '@angular/core';
import {StaffList} from './components/staff-list/staff-list';
import {toSignal} from '@angular/core/rxjs-interop';
import {StaffService} from '../../shared/services/staff/staff';
import {httpResource} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-staff',
  imports: [
    StaffList
  ],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class Staff {
  private staffService = inject(StaffService);
  protected staff = toSignal(this.staffService.getAllStaff(), {initialValue: []})

  // httpResource.
  protected staffResource = httpResource(() => environment.baseUrl + '/characters/staff');
}
