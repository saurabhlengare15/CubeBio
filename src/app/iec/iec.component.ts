import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-iec',
  templateUrl: './iec.component.html',
  styleUrls: ['./iec.component.css']
})
export class IecComponent implements OnInit {

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }
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
}
