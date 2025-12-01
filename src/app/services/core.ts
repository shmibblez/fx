import { Injectable, signal, WritableSignal } from '@angular/core';
import { EffectType } from '../objects/effects/effect';
import { FxRack } from '../objects/fxRack';


/**
 * Core service provides app variables
 * @property core app data accessor
 */
@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private core: Core;

  public constructor() {
    this.core = new Core();
  }

  public addEffect(effect: EffectType) {
    this.core.fxRack().addEffect(effect)
  }

  public get fxRack(): FxRack {
    return this.core.fxRack();
  }
}

export class Core {
  public fxRack: WritableSignal<FxRack>;
  constructor(fxRack: FxRack = new FxRack()) {
    this.fxRack = signal(fxRack);
  }
}