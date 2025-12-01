/**
 * Base class for all effects.
 * @property name Name of the effect
 * @property audioCtx Audio context the effect is using
 */
export abstract class Pedal {
    public readonly name: string;
    public abstract type: EffectType;
    protected audioCtx: AudioContext;
    public audioNodes: AudioNode[];

    constructor(name: string, audioCtx: AudioContext) {
        this.name = name;
        this.audioCtx = audioCtx;
        this.audioNodes = this.createNodes();
        this.reconnectAudioNodes();
    }

    public get firstNode(): AudioNode {
        return this.audioNodes[0]
    }

    public get lastNode(): AudioNode {
        return this.audioNodes[this.audioNodes.length - 1]
    }

    protected abstract createNodes(): AudioNode[]

    protected reconnectAudioNodes(): void {
        // for each node, connect current to next in chain
        for (let i = 0; i < this.audioNodes.length - 1; i++) {
            this.audioNodes[i].disconnect();
            this.audioNodes[i].connect(this.audioNodes[i + 1]);
        }
    }
}

export type EffectType = "distortion" | "reverb" | "chorus" | "eq" | "delay";
export const availableEffects: EffectType[] = ["distortion", "eq", "delay"]