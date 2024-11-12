import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileValue:boolean = false
  mobileArrow:boolean = false
  openMenu(){
    this.mobileValue = !this.mobileValue
  }
  openArrow(){
    this.mobileArrow = !this.mobileArrow
  }
}