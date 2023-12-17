import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showSoln(event:any){
    const solution = event.target.value;
     this.router.navigate(['/solutions',solution])
  }

}
