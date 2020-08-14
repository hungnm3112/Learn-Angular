import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

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
  selectedHero : Hero;

  constructor(private service: HeroService,private messageService: MessagesService) { }

  ngOnInit(): void {
    this.service.getHeroes().subscribe(heroes => this.heroes=heroes);
  }

  onSelect(hero : Hero){    
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
}
