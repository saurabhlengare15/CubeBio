import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { 
  //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //     return false;
  //  }

  //  this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        this.router.navigated = false;
  //        window.scrollTo(0, 0);
  //     }
  // });
  }

  ngOnInit(): void {
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     // Reload the current page
    //     window.location.reload();
    //   });
  }

}
