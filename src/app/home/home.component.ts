import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logos = [
    '../../assets/Cube-Bio-Energy-Logo.jpeg',
    '../../assets/Cube-Bio-Energy-Logo.jpeg',
    '../../assets/Cube-Bio-Energy-Logo.jpeg',
    '../../assets/Cube-Bio-Energy-Logo.jpeg',
    '../../assets/Cube-Bio-Energy-Logo.jpeg'
  ];

  slickCarouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
  };

  constructor() { }

  ngOnInit(): void {
    
  }
}
