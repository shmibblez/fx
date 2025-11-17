import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu';
import { FxRackComponent } from './components/fx-rack/fx-rack';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FxRackComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fx');
}
