import { Effect } from "./effect";

export class Distortion extends Effect {
    
    constructor(audioCtx: AudioContext) {
        const waveShaper = new WaveShaperNode(audioCtx)
        const audioNodes = [waveShaper]
        // todo: setup distortion
        super("Distortion", audioCtx, audioNodes)
    }
}