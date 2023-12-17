import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mediaawards',
  templateUrl: './mediaawards.component.html',
  styleUrls: ['./mediaawards.component.css'],
})
export class MediaawardsComponent implements OnInit {
  
  // slides = [
  //   {img: "http://placehold.it/350x150/000000"},
  //   {img: "http://placehold.it/350x150/111111"},
  //   {img: "http://placehold.it/350x150/333333"},
  //   {img: "http://placehold.it/350x150/666666"}
  // ];
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  // constructor() { }

  // ngOnInit(): void {
  // }

  boxes = [
    { content: 'Box 1', state: 'active' },
    { content: 'Box 2', state: 'inactive' },
    { content: 'Box 3', state: 'inactive' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.rotateBoxes();
    }, 3000);
  }

  rotateBoxes() {
    const activeIndex = this.boxes.findIndex((box) => box.state === 'active');
    const nextIndex = (activeIndex + 1) % this.boxes.length;

    this.boxes.forEach((box, index) => {
      box.state = index === nextIndex ? 'active' : 'inactive';
    });
  }
}
