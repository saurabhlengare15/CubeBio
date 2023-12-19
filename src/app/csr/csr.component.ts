import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }
}
