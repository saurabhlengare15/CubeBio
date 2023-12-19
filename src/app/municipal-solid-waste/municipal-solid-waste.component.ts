import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import { Observable } from 'rxjs';
import { SolutionDataService } from '../solution-data.service';

@Component({
  selector: 'app-municipal-solid-waste',
  templateUrl: './municipal-solid-waste.component.html',
  styleUrls: ['./municipal-solid-waste.component.css']
})
export class MunicipalSolidWasteComponent implements OnInit {

  resultdata : any;

  constructor(private dataService: SolutionDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.dataService.getFilteredData(params['solution']).subscribe(
        data =>{
          console.log(data);
          this.resultdata = data[0]
        }
      );
    })
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

}
