import { Component, HostListener } from '@angular/core';
import { ChipComponent } from '../chip/chip';
import { availableEffects, EffectType } from '../../objects/effects/effect';
import { Core, CoreService } from '../../services/core';
import { Distortion } from '../../objects/effects/distortion';

type menuItem = "FX" | "IO"

@Component({
  selector: 'app-menu',
  imports: [ChipComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {
  selectedOption: menuItem | null = null

  constructor(private core: CoreService) {}

  get availableEffects() {
    return availableEffects;
  }

  selectMenuItem(item: menuItem | null, e: PointerEvent) {
    this.selectedOption = item;
    e.stopPropagation();
    console.log(`menu item updated: ${item}`)
  }

  // unselect when click outside menu
  @HostListener('document:click', ['$event', '$event.target'])
  clickOutside(e: PointerEvent, t: EventTarget | null) {
    this.selectMenuItem(null, e);
  }

  effectSelected(event: PointerEvent, effectType: EffectType): void {
    // todo: add effect to current fx chain
    this.core.addEffect(effectType)
  }
}
