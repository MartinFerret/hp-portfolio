import {Component, computed, effect, inject, Signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-houses',
  imports: [
    RouterLink
  ],
  templateUrl: './houses.html',
  styleUrl: './houses.scss',
})
export class Houses {
  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected houses: Signal<string[]> = computed(() => this.routeData()['houses']);
}
