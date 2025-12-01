import { signal } from "@angular/core";
import { Pedal, EffectType } from "./effect";

export class Distortion extends Pedal {

    override type: EffectType = "distortion";
    override audioNodes: AudioNode[] = [];
    constructor(audioCtx: AudioContext) {
        super("Distortion", audioCtx);
    }

    public readonly minVolume = 0;
    public readonly maxVolume = 10;
    public readonly minGain = 0;
    public readonly maxGain = 10;

    public gain = signal(50);
    public volume = signal(50);

    private makeDistortionNode(): WaveShaperNode {
        const distortion = this.audioCtx.createWaveShaper();
        distortion.curve = this.makeDistortionCurve(400);
        distortion.oversample = "4x";
        return distortion
    }

    override createNodes(): AudioNode[] {
        return [this.makeDistortionNode(), this.audioCtx.createGain()];
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

    public changeDistortion(amount: number) {
        const distortionNode = this.audioNodes[0] as WaveShaperNode;
        distortionNode.curve = this.makeDistortionCurve(amount);
    }

    public changeVolume(amount: number) {
        // to be implemented
        const gainNode = this.audioNodes[1] as GainNode;
        const gainValue = amount / 100;
        gainNode.gain.value = gainValue;
        console.log(`gain node - min gain value: ${gainNode.gain.minValue}, max gain value: ${gainNode.gain.maxValue}`);
    }
}