import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('hovered', style({
        transform: 'scale(1.1)', // Adjust the scale as needed
        backgroundColor: '#007BFF', // Adjust the background color on hover
        color: '#fff' // Adjust the text color on hover
      })),
      state('notHovered', style({
        transform: 'scale(1)',
        backgroundColor: '#f8f9fa', // Adjust the default background color
        color: '#000' // Adjust the default text color
      })),
      transition('notHovered <=> hovered', animate('200ms ease-in-out'))
    ]),
  ]
})
export class CareerPageComponent implements OnInit{

  ngOnInit(): void {

    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#fff',
      animateCursor:true,
      blinkSpeed:500,
      cursorColor: '#fff',
      typeSpeed: 90,
      deleteSpeed: 90,
    })

    writer
      .type('CAREER')
      .rest(1000)
      .start()

    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

  constructor(private fb : FormBuilder){}

  success:boolean = false;
  error:boolean = false;

  buttonState = 'notHovered';
  OnHover(hovered: boolean) {
    this.buttonState = hovered ? 'hovered' : 'notHovered';
  }


  myForm: FormGroup = this.fb.group({
    // form controls and validation rules here
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
    address: ['', [Validators.required]],
  });

  OnSubmit(){

    if (this.myForm.valid) {
      console.log(this.myForm.value);

      const templateParams = {
        name: this.myForm.value.name,
        email: this.myForm.value.email,
        phone: this.myForm.value.phone,
        address: this.myForm.value.address,
    };

    emailjs.send('service_pk991yc','template_yc7im6c', templateParams,'kg9RpK0xdqiOA6W3h')
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

  closeAlert(){
    this.success = false;
    this.error = false;
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

}
