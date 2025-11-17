import { Component, Input } from '@angular/core';

@Component({
  selector: 'slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  @Input({ required: true }) initialValue!: number;
  @Input() label: string | null = null;

  value: number;

  constructor() {
    if (this.initialValue >= this.min && this.initialValue <= this.max) {
      this.value = this.initialValue
    } else {
      this.value = (this.min + this.max) / 2;
    }
  }
}