import { Component, Input } from '@angular/core';
import { FxRack } from '../../objects/fxRack';
import { DistortionComponent } from '../effects/distortion/distortion';
import { Distortion } from '../../objects/effects/distortion';
import { Pedal } from '../../objects/effects/effect';
import { EqualizerComponent } from '../effects/equalizer/equalizer';

@Component({
  selector: 'fx-rack',
  imports: [DistortionComponent, EqualizerComponent],
  templateUrl: './fx-rack.html',
  styleUrl: './fx-rack.scss',
})
export class FxRackComponent {
  @Input({ required: true }) fxRack!: FxRack;
  // todo: fx rack ui

  // todo: handle initialization gesture to start audio context (button with "start audio")
  //  will also handle audio permissions

  get initialized(): boolean {
    return this.fxRack.isInitialized;
  }

  effectAs<T>(effect: Pedal): T {
    return effect as T;
  }

  effectAsDistortion(effect: Pedal): Distortion {
    return effect as Distortion;
  }
}
