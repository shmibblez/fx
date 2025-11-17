import { Component, HostListener } from '@angular/core';

type menuItem = "FX" | "IO"

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {
  selectedOption: menuItem | null = null


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
}
