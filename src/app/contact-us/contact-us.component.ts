import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load',Aos.refresh);}

  icons = ['fa fa-phone-square fa-3x','fa fa-envelope fa-3x','fa fa-map fa-3x', 'fa fa-map-marker fa-3x'];
  titles = ['Phone Number','Email','REGISTERED OFFICE ADDRESS','CORPORATE OFFICE'];
  sub_titles = ['040-40057965','INFO@CUBEBIOENERGY.CO.IN',
              'D.NO. 17-105A, ALLAMVARIDONKA,KOLLIPARA VILLAGE AND MANDAL, GUNTUR DISTRICT, ANDHRA PRADESH, INDIA – 522304.',
              'CUBE BIO-ENERGY PRIVATE LIMITED, #501, KK PLAZA, AYYAPA SOCIETY, MADHAPUR, HYDERABAD – 500081.'
            ];

}