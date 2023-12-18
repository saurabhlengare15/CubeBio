import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // autoplayTimeout: 2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  carouselData= ([
    { id: 'slide-1', title: 'text1', src:'../../assets/p1.png'},
    { id: 'slide-2', title: 'text2',src:'../../assets/p2.png' },
    { id: 'slide-3', title: 'text3',src:'../../assets/p3.png' },
    { id: 'slide-4', title: 'text4',src:'../../assets/p4.png' },
    { id: 'slide-5', title: 'text5',src:'../../assets/p5.png' },
    { id: 'slide-6', title: 'text5',src:'../../assets/p6.png' },
    { id: 'slide-7', title: 'text6',src:'../../assets/p7.png' },
    { id: 'slide-8', title: 'text8',src:'../../assets/p8.png' },
  ]);

}
