import { animate, style, transition, trigger,state } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
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
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

  buttonState = 'notHovered';


  OnHover(hovered: boolean) {
    this.buttonState = hovered ? 'hovered' : 'notHovered';
  }

}
