import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  constructor() { }

  heading!: string;
  data!: string;
  isClickedvision: boolean = false;
  isClickedmission: boolean = false;
  isClickedphilosophy: boolean = false;

  ngOnInit(): void {

    this.heading = 'VISION STATEMENT';
    this.data = 'Cube bio-Energy Private Limited (CBEPL) want to be a part of success story in creating the clean and healthy environment society by providing solutions for all environmental issues.';
    // Aos.init({ once: true });
    // window.addEventListener('load', Aos.refresh);
    this.isClickedmission = false;
      this.isClickedphilosophy = false;
      this.isClickedvision = !this.isClickedvision;
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

  displayData(name: string) {
    if (name == 'vision') {
      this.heading = 'VISION STATEMENT';
      this.data = 'Cube bio-Energy Private Limited (CBEPL) want to be a part of success story in creating the clean and healthy environment society by providing solutions for all environmental issues.';
      this.isClickedmission = false;
      this.isClickedphilosophy = false;
      this.isClickedvision = !this.isClickedvision;
    } else if (name == 'mission') {
      this.heading = 'MISSION STATEMENT';
      this.data = 'To provide world class sustainable infrastructure for waste management to achieve clean and healthy environment society.';
      this.isClickedphilosophy = false;
      this.isClickedvision = false;
      this.isClickedmission = !this.isClickedmission;
    } else {
      this.heading = 'PHILOSOPHY';
      this.data = 'PPP is our philosophy, CBEPL put planet first among our three interlinked pursuits - Planet (Environmental), People (Social) and Process (Governance) – “CBEPLs DNA = ESG”.';
      this.isClickedvision = false;
      this.isClickedmission = false;
      this.isClickedphilosophy = !this.isClickedphilosophy;
    }
  }

  viewSelected() {

  }
}
