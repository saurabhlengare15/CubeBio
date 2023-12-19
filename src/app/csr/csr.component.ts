import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {

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
      .type('CSR')
      .rest(1000)
      .start()

    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }
}
