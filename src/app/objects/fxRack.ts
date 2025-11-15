import { Effect } from "./effect";

export class fxRack {
    public readonly rackName: string;
    public readonly effects: Effect[];
    private audioCtx: AudioContext;
    constructor(
        rackName: string = "FxRack",
        effects: Effect[] = [],
    ) {
        this.rackName = rackName;
        this.effects = effects;
        this.audioCtx = new AudioContext();
    }

    addEffect(effect: Effect): void {
        this.effects.push(effect);
    }

    /**
     * todo: add support for irig
     */
    defineOutput(): void {
        // connect last effect in chain to audio output
        const lastEffect = this.effects[this.effects.length - 1]
        const lastNode = lastEffect.audioNodes[lastEffect.audioNodes.length - 1];
        lastNode.connect(this.audioCtx.destination);
    }

}