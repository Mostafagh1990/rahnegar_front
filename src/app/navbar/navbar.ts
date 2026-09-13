import { Component,HostListener,OnInit} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit  {

  is_hidden=true

  ngOnInit(): void {
    this.onResize()
  }

  onClick(){
    this.is_hidden=!this.is_hidden
  }

  @HostListener('window:resize')
  onResize() {
    this.is_hidden = window.innerWidth < 768;
  }
}