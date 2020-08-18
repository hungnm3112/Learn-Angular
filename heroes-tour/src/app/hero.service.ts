import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './moc-heroes';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl ="/api/heroes";
  constructor(
    private messageService :MessagesService,
    private http : HttpClient
  ) { }

  // getHeroes() : Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }
  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap( _ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  // getHero(id : number) : Observable<Hero> {
  //   this.messageService.add(`HeroesComponent: Selected hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id===id));
  // }
  getHero(id : number) : Observable<Hero>{
    const url = '${this.heroesUrl}/${id}';
    return this.http.get<Hero>(url).pipe(
      tap(( _ =>this.log('fetcheed hero id=${id}'))),
      catchError(this.handleError<Hero>('getHero id=${id}'))
    );
  }
  
  private log(message : string){
    this.messageService.add("Heroes Service:{$message}");
  }

  private handleError <T>(operation = 'operation', result?:T){
    return (error : any) : Observable<T> => {
      //log error to console and complie
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    }
  }
}
