import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aos.init({ once: true });
    // window.addEventListener('load', Aos.refresh);
    Aos.init();
    window.addEventListener('load',Aos.refresh);
  }
}
