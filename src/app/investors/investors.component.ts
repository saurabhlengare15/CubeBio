import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit{
ngOnInit(): void {
  Aos.init();
  window.addEventListener('load', Aos.refresh);
}
}
