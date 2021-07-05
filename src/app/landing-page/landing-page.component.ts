import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  intro_video: string="/assets/video/intro_video.mp4"
  image1:string="/assets/image/image1.jfif"
  image2:string="/assets/image/image2.jpg"
  image3:string="/assets/image/image3.jpg"
  image4:string="/assets/image/image4.jpg"
  image5:string="/assets/image/image5.jpeg"
  constructor() { }

  ngOnInit(): void {
  }

}
