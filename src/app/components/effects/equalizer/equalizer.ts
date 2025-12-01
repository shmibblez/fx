import { Component, Input } from '@angular/core';
import { Equalizer } from '../../../objects/effects/equalizer';

@Component({
  selector: 'eq',
  imports: [],
  templateUrl: './equalizer.html',
  styleUrl: './equalizer.scss',
})
export class EqualizerComponent {
  @Input({ required: true }) eq!: Equalizer;

  // todo: implement equalizer ui
}