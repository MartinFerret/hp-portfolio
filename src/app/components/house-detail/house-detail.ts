import {Component, computed, inject, Signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {CharacterHouse} from '@models/characterHouse.model';
import {map} from 'rxjs';
import {TitleCasePipe} from '@angular/common';
import {SuffixPipe} from '@pipes/suffix-pipe';

@Component({
  selector: 'app-house-detail',
  imports: [
    TitleCasePipe,
    SuffixPipe
  ],
  templateUrl: './house-detail.html',
  styleUrl: './house-detail.scss',
})
export class HouseDetail {
  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected characters: Signal<CharacterHouse[]> = computed (() => this.routeData()['house']);

  protected houseName = toSignal(
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('houseName') ?? '')
    ),
    { initialValue: '' }
  );
}
