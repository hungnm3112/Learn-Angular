import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './moc-heroes';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl ="/app/heroes";
  constructor(
    private messageService :MessagesService,
    private http : HttpClient
  ) { }

  // getHeroes() : Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }
  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id : number) : Observable<Hero> {
    this.messageService.add(`HeroesComponent: Selected hero id=${id}`);
    return of(HEROES.find(hero => hero.id===id));
  }
  
  private log(message : string){
    this.messageService.add(message);
  }
}
