import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer,Hero,Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rahnegar');
}
