import { Component, signal } from '@angular/core';
import { Bonjour } from './bonjour/bonjour';


@Component({
  selector: 'app-root',
  imports: [Bonjour],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tp');
}
