import { EffectType, Pedal } from "./effect";

export class DelayPedal extends Pedal{
    public override type: EffectType = "delay";
    protected override createNodes(): AudioNode[] {
        throw new Error("Method not implemented.");
    }
    
}