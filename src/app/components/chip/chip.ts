import { Component, Input } from '@angular/core';
import { EffectType } from '../../objects/effects/effect';

@Component({
  selector: 'chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class ChipComponent<T> {
  @Input({required: true}) title!: T;
}
