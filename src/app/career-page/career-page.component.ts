import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';

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

  buttonState = 'notHovered';
  OnHover(hovered: boolean) {
    this.buttonState = hovered ? 'hovered' : 'notHovered';
  }

}
