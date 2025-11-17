/**
 * Base class for all effects.
 * @property name Name of the effect
 * @property audioCtx Audio context the effect is using
 */
export abstract class Effect {
    public readonly name: string;
    protected audioCtx: AudioContext;
    abstract audioNodes: AudioNode[];

    constructor(name: string, audioCtx: AudioContext) {
        this.name = name;
        this.audioCtx = audioCtx;
    }

    /**
     * connects @effect last audio node to this effect's first audio node
     * @param effect connect @effect output to this input
     */
    abstract connectAfter(effect: Effect): void;
}