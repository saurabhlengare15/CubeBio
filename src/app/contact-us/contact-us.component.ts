import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {

    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#fff',
      animateCursor: true,
      blinkSpeed: 500,
      cursorColor: '#fff',
      typeSpeed: 90,
      deleteSpeed: 90,
    })

    writer
      .type('CONTACT US')
      .rest(1000)
      .start()

    Aos.init();
    window.addEventListener('load', Aos.refresh);

  }

  icons = ['fa fa-phone-square fa-4x', 'fa fa-envelope fa-4x', 'fa fa-map fa-4x', 'fa fa-thumb-tack fa-4x'];
  titles = ['Phone Number', 'Email', 'REGISTERED OFFICE ADDRESS', 'CORPORATE OFFICE'];
  sub_titles = ['040-40057965', 'INFO@CUBEBIOENERGY.CO.IN',
    'D.NO. 17-105A, ALLAMVARIDONKAw,KOLLIPARA VILLAGE AND MANDAL, GUNTUR DISTRICT, ANDHRA PRADESH, INDIA – 522304.',
    'CUBE BIO-ENERGY PRIVATE LIMITED, #501, KK PLAZA, AYYAPA SOCIETY, MADHAPUR, HYDERABAD – 500081.'
  ];

}