/**
 * Base class for all effects.
 * @property name Name of the effect
 * @property audioCtx Audio context the effect is using
 */
export abstract class Effect {
    public readonly name: string;
    protected audioCtx: AudioContext;
    public audioNodes: AudioNode[];

    constructor(name: string, audioCtx: AudioContext, audioNodes: AudioNode[]) {
        this.name = name;
        this.audioCtx = audioCtx;
        this.audioNodes = audioNodes;
        this.reconnectAudioNodes();
    }

    public get firstNode(): AudioNode {
        return this.audioNodes[0]
    }

    public get lastNode(): AudioNode {
        return this.audioNodes[this.audioNodes.length - 1]
    }

    protected reconnectAudioNodes(): void {
        // for each node, connect current to next in chain
        for (let i = 0; i < this.audioNodes.length - 1; i++) {
            this.audioNodes[i].connect(this.audioNodes[i + 1]);
        }
    }
}

export type EffectType = "distortion" | "reverb" | "chorus" | "eq"
export const availableEffects: EffectType[] = ["distortion", "eq"]