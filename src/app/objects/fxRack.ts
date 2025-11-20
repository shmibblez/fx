import { signal, WritableSignal } from "@angular/core";
import { Effect, EffectType } from "./effects/effect";
import { Distortion } from "./effects/distortion";

export class FxRack {
    public readonly rackName: WritableSignal<string>;
    public readonly effects: WritableSignal<Effect[]>;
    private audioCtx: AudioContext;
    private input: MediaStreamAudioSourceNode | null = null;
    constructor(
        rackName: string = "FxRack",
        effects: Effect[] = [],
    ) {
        this.rackName = signal(rackName);
        this.effects = signal(effects);
        this.audioCtx = new AudioContext();
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
            this.input = this.audioCtx.createMediaStreamSource(stream)
        })
    }

    private get firstEffect(): Effect | null {
        return this.effects()[0];
    }

    private get lastEffect(): Effect | null {
        return this.effects()[this.effects.length - 1];
    }

    /**
     * resets connections between effects, also routes input & output
     * 
     * called when initialized
     * can also be called externally
     */
    resetConnections() {
        // if no effects yet connect input to output
        if (this.effects.length <= 0) {
            this.input?.connect(this.audioCtx.destination);
            return;
        }
        // connect input to first node
        this.input?.connect(this.firstEffect!.firstNode)
        // for each effect, connect last node to next's first node
        for (let i = 0; i < this.effects.length - 1; i++) {
            this.effects()[i].lastNode.connect(this.effects()[i + 1].firstNode)
        }
        // connect last node to output
        this.lastEffect!.lastNode.connect(this.audioCtx.destination);
    }

    addEffect(effect: EffectType): void {
        switch (effect) {
            case "distortion": {
                this.effects().push(new Distortion(this.audioCtx));
                break;
            }
            case "eq": {
                // todo: add eq
                return;
                break;
            }
            case "chorus": {
                // todo: add chorus
                return;
                break;
            }
            case "reverb": {
                // todo: add reverb
                return;
                break;
            }

        }
        // todo: connections before and after
        this.connectToPrevious(this.effects.length - 1);
        this.connectToNext(this.effects.length - 1);
    }

    /**
     * connects last audio node of previous effect to this one's first
     * if none before, connects to input
     * @param index index of effect to connect
     */
    private connectToPrevious(index: number): void {
        const effect = this.effects()[index]
        if (index <= 0) {
            // if first effect, connect to input
            this.input?.disconnect() // remove outgoing connections
            this.input?.connect(effect.firstNode)
            return;
        }
        // connect prev effect to this one
        const prevEffect = this.effects()[index - 1]
        prevEffect.lastNode.disconnect() // remove outgoing connections
        prevEffect.lastNode.connect(effect.firstNode)
    }

    /**
     * connects last audio node of effect at index to next one's first
     * if none after, connects to output
     * @param index index of effect to connect
     */
    private connectToNext(index: number): void {
        const effect = this.effects()[index];
        effect.lastNode.disconnect() // remove outgoing connections
        if (index >= this.effects().length - 1) {
            // if last effect, connect to output
            effect.lastNode.connect(this.audioCtx.destination);
            return;
        }
        // connect this effect to next one
        const nextEffect = this.effects()[index + 1];
        effect.lastNode.connect(nextEffect.firstNode);
    }

    /**
     * todo: add support for irig
     */
    defineOutput(): void {
        // connect last effect in chain to audio output
        const lastEffect = this.effects()[this.effects().length - 1]
        const lastNode = lastEffect.audioNodes[lastEffect.audioNodes.length - 1];
        lastNode.connect(this.audioCtx.destination);
    }
}