import { Component, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private el: ElementRef) { }


  ngOnInit(): void {
  }

  isAboutUsActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('/about/');
  }

  isSolutionActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('/solutions/');
  }

  isHomeActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('home');
  }

  isMediaActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('media-and-rewards');
  }

  isContactActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('contact-us');
  }

  isCareerActive(): boolean {
    const currentUrl = this.router.url;
    // console.log(currentUrl);
    return currentUrl.includes('career');
  }


  showSoln(event: any) {
    const solution = event.target.value;
    this.router.navigate(['/solutions', solution])
  }

}
