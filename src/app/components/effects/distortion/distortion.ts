import { Component } from '@angular/core';
import { Effect } from '../../../objects/effect';

@Component({
  selector: 'app-distortion',
  imports: [],
  templateUrl: './distortion.html',
  styleUrl: './distortion.scss',
})
export class Distortion extends Effect {
  override audioNodes: AudioNode[] = [];
  constructor(audioCtx: AudioContext) {
    super("Distortion", audioCtx);
    this.audioNodes = [new WaveShaperNode(this.audioCtx)];
  }

  override resetConnections(): void {
    // todo
  }

  override connectAfter(effect: Effect): void {
    effect.audioNodes[effect.audioNodes.length - 1].connect(this.audioNodes[0]);
  }
}
