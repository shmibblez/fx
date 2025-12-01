import { Component, Input, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  @Input({ required: true }) value!: WritableSignal<number>;
  @Input() label: string | null = null;

  constructor() {
    // if value invalid set to mid value
    if (this.value() < this.min || this.value() > this.max) {
      this.value.set((this.min + this.max) / 2);
    }
  }

  // todo: def gonna need limit / debounce here
  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(Number(inputElement.value));
  }
}