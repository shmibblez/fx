import { Component } from '@angular/core';
import { Effect } from '../../../objects/effect';

@Component({
  selector: 'app-distortion',
  imports: [],
  templateUrl: './distortion.html',
  styleUrl: './distortion.scss',
})
export class DistortionComponent extends Effect {

  minimized: boolean = false;

  override audioNodes: AudioNode[] = [];
  constructor(audioCtx: AudioContext) {
    super("Distortion", audioCtx);
    this.audioNodes = [new WaveShaperNode(this.audioCtx)];
  }

  toggleMinimized() {
    this.minimized = !this.minimized;
  }

  override resetConnections(): void {
    // todo
  }

  override connectAfter(effect: Effect): void {
    effect.audioNodes[effect.audioNodes.length - 1].connect(this.audioNodes[0]);
  }
}
