import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delay',
  imports: [],
  templateUrl: './delay.html',
  styleUrl: './delay.scss',
})
export class Delay {
  @Input({ required: true }) delay!: Delay;
}
