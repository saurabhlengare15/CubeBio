import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-diretors',
  templateUrl: './diretors.component.html',
  styleUrls: ['./diretors.component.css']
})
export class DiretorsComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

}
