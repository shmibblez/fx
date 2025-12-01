import { Component, HostListener } from '@angular/core';
import { ChipComponent } from '../chip/chip';
import { availableEffects, EffectType } from '../../objects/effects/effect';
import { CoreService } from '../../services/core';

type menuItem = "FX" | "IO"

@Component({
  selector: 'app-menu',
  imports: [ChipComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {
  selectedOption: menuItem | null = null

  constructor(private core: CoreService) {
    console.log('Menu initialized, core:', this.core);
  }

  get availableEffects() {
    return availableEffects;
  }

  selectMenuItem(item: menuItem | null, e: PointerEvent) {
    this.selectedOption = item;
    e.stopPropagation();
  }

  // unselect when click outside menu
  @HostListener('document:click', ['$event', '$event.target'])
  clickOutside(e: PointerEvent, t: EventTarget | null) {
    this.selectMenuItem(null, e);
    e.stopPropagation();
  }

  effectSelected(event: PointerEvent, effectType: EffectType): void {
    // todo: add effect to current fx chain
    this.core.addEffect(effectType)
    console.log("effect selected:", effectType);
  }
}
