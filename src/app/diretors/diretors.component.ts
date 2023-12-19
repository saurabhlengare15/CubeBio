import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-diretors',
  templateUrl: './diretors.component.html',
  styleUrls: ['./diretors.component.css']
})
export class DiretorsComponent implements OnInit {
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
      .type('BOARD OF DIRECTORS')
      .rest(1000)
      .start()

    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

}
