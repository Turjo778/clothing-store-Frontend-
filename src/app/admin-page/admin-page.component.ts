import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  getData:any ={}
  constructor() { }

  ngOnInit(): void {
  }

  getUserValue(value:any){
    console.log(value)
  }
}
