import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  success:boolean = false;
  error:boolean = false;

  constructor(private router: Router, private fb : FormBuilder) {
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

  myForm: FormGroup = this.fb.group({
    // form controls and validation rules here
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  OnSubmit(){

    if (this.myForm.valid) {
      console.log(this.myForm.value);

      const templateParams = {
        name: this.myForm.value.name,
        email: this.myForm.value.email,
        phone: this.myForm.value.phone,
        subject: this.myForm.value.subject,
        message: this.myForm.value.message
    };

    emailjs.send('service_pk991yc','template_tlsflo9', templateParams,'kg9RpK0xdqiOA6W3h')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         this.success = true;
        this.error = false;
      }, (err) => {
         console.log('FAILED...', err);
      });

      this.myForm.reset();

    } else {
      console.log('Form is invalid. Please fix the errors.');
      console.log(this.myForm.value);
      this.error = true;
      this.success = false;
    }

  }

  hasError(controlName: string, errorName: string) {
    const control = this.myForm.get(controlName);

    if (!control) {
      return false;
    }

    if (errorName === 'pattern' && control.hasError(errorName)) {
      return control.dirty || control.touched;
    }

    return control.hasError(errorName) && (control.dirty || control.touched);
  }

// CUBE BIO-ENERGY PRIVATE LIMITED, #501, KK PLAZA, AYYAPA SOCIETY, MADHAPUR, HYDERABAD – 500081.
  icons = ['fa fa-phone-square fa-4x', 'fa fa-envelope fa-4x', 'fa fa-map fa-4x', 'fa fa-thumb-tack fa-4x'];
  titles = ['Phone Number', 'Email', 'REGISTERED OFFICE ADDRESS', 'CORPORATE OFFICEs'];
  sub_titles = ['+91 8459115863, +91 9518586155 +91 9881494076, +91 8412888786', 'AZFAWASTEMANAGEMENT31@GMAIL.COM',
    'ECP VASTU A2 | 16, HANDEWADI ROAD, HADAPSAR PUNE - 411028',
    'NA'
  ];

  closeAlert(){
    this.success = false;
    this.error = false;
  }

}
