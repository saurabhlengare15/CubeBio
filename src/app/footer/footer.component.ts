import { Component,ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  showSoln(event:any){
    const solution = event.target.value;
     this.router.navigate(['/solutions',solution])
  }
}
