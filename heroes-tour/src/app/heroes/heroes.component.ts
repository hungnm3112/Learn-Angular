import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../moc-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes : Hero [];
  
  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

  
}
