import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent  {
  ShowDiv :boolean= false
  ShowDiv1:boolean=false
  constructor() { }


  toggleDplayDiv() {
    this.ShowDiv = !this.ShowDiv;
    this.ShowDiv1=false
  }
  toggleDplayDiv1() {
    this.ShowDiv1 = !this.ShowDiv1;
    this.ShowDiv=false
  }
}
