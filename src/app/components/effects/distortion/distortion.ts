import { Component } from '@angular/core';
import { Effect } from '../../../objects/effect';

@Component({
  selector: 'app-distortion',
  imports: [],
  templateUrl: './distortion.html',
  styleUrl: './distortion.scss',
})
export class DistortionComponent extends Effect {

  override audioNodes: AudioNode[] = [];
  constructor(audioCtx: AudioContext) {
    super("Distortion", audioCtx);
    this.audioNodes = [this.makeDistortionNode()];
  }

  private makeDistortionNode(): WaveShaperNode {
    const distortion = this.audioCtx.createWaveShaper();
    distortion.curve = this.makeDistortionCurve(400);
    distortion.oversample = "4x";
    return distortion
  }

  private makeDistortionCurve(amount: number = 50) {
    const k = amount; 
    const numSamples = 44100;
    const curve = new Float32Array(numSamples);
    const deg = Math.PI / 180;

    for (let i = 0; i < numSamples; i++) {
      const x = (i * 2) / numSamples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  override connectAfter(effect: Effect): void {
    effect.audioNodes[effect.audioNodes.length - 1].connect(this.audioNodes[0]);
  }
}