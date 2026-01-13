import {Component, computed, inject, Signal} from '@angular/core';
import {StaffList} from './components/staff-list/staff-list';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {StaffModel} from '../../shared/models/staff';

@Component({
  selector: 'app-staff',
  imports: [
    StaffList
  ],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class Staff {
  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected staff: Signal<StaffModel[]> = computed(() => this.routeData()['staff']);

}
