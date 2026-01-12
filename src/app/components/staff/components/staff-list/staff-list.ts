import {Component, input} from '@angular/core';
import {StaffModel} from '../../../../shared/models/staff';

@Component({
  selector: 'app-staff-list',
  imports: [],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss',
})
export class StaffList {
  staff = input.required<StaffModel[]>();
}
