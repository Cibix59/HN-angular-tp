import { Component, signal } from '@angular/core';
import { Bonjour } from './bonjour/bonjour';
import { Calculatrice } from './calculatrice/calculatrice';


@Component({
  selector: 'app-root',
  imports: [Bonjour, Calculatrice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tp');
}
