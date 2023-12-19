import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import { Observable } from 'rxjs';
import { SolutionDataService } from '../solution-data.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-municipal-solid-waste',
  templateUrl: './municipal-solid-waste.component.html',
  styleUrls: ['./municipal-solid-waste.component.css']
})
export class MunicipalSolidWasteComponent implements OnInit {

  resultdata : any;

  constructor(private dataService: SolutionDataService,private route: ActivatedRoute) { }

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
      .type('about us')
      .rest(1000)
      .start()

    this.route.params.subscribe(params=>{
      this.dataService.getFilteredData(params['solution']).subscribe(
        data =>{
          console.log(data);
          this.resultdata = data[0]
        }
      );
    });
    
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

}
