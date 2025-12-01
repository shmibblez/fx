import { EffectType, Pedal } from "./effect";

export class Equalizer extends Pedal {
    public override type: EffectType = "eq";
    protected override createNodes(): AudioNode[] {
        // todo: implement equalizer, add necessary nodes
        throw new Error("Method not implemented.");
    }
}