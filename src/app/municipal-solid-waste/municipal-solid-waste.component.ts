import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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

  resultdata: any;
  title: any;

  constructor(private dataService: SolutionDataService, private route: ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         this.router.navigated = false;
         window.scrollTo(0, 0);
      }
  });
   }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.dataService.getFilteredData(params['solution']).subscribe(
        data => {
          console.log(data);
          this.resultdata = data[0];

          this.title = this.resultdata.title;
          console.log("title: " + this.title);

          const target = document.querySelector('.tw');
          const writer = new Typewriter(target, {
            loop: true,
            typeColor: '#fff',
            animateCursor: true,
            blinkSpeed: 500,
            cursorColor: '#fff',
            typeSpeed: 90,
            deleteSpeed: 90,
          })

          writer
            .type(this.title)
            .rest(1000)
            .start()
        }
      );
    });

    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }

}
