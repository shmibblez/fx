import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Effect, EffectType } from '../objects/effects/effect';
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

  constructor() {
    this.core = new Core();
  }


  addEffect(effect: EffectType) {
    this.core.fxRack().addEffect(effect)
  }
}

export class Core {
  public fxRack: WritableSignal<FxRack>;
  constructor(fxRack: FxRack = new FxRack()) {
    this.fxRack = signal(fxRack);
  }
}