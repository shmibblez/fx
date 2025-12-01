import { Component, Input } from '@angular/core';
import { Slider } from "../../controls/slider/slider";
import { Distortion } from '../../../objects/effects/distortion';

@Component({
  selector: 'distortion',
  imports: [Slider],
  templateUrl: './distortion.html',
  styleUrls: ['./distortion.scss'],
})
export class DistortionComponent {
  @Input({ required: true }) distortion!: Distortion;

  get minVolume(): number {
    return this.distortion.minVolume;
  }
  get maxVolume(): number {
    return this.distortion.maxVolume;
  }
  get minGain(): number {
    return this.distortion.minGain;
  }
  get maxGain(): number {
    return this.distortion.maxGain;
  }
}