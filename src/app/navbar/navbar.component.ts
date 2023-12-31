import { Component,ElementRef, HostListener, Renderer2,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd,Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     // Reload the current page
    //     window.location.reload();
    //   });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  showSoln(event:any){
    const solution = event.target.value;
     this.router.navigate(['/solutions',solution])
  }

}
