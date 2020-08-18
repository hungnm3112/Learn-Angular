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
  private httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
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
    const url = this.heroesUrl+'/'+id;
    return this.http.get<Hero>(url).pipe(
      tap(( _ =>this.log('fetcheed hero id='+id))),
      catchError(this.handleError<Hero>('getHero id='+id))
    );
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(( _ =>this.log('update hero id='+hero.id))),
      catchError(this.handleError<Hero>('update hero='+hero))
    )
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(( (newHero: Hero) =>this.log('add hero name='+newHero.id))),
      catchError(this.handleError<Hero>('add new hero name is: '+hero.name))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero>{
    const id = typeof hero ==='number'?hero:hero.id;
    const url = this.heroesUrl+'/'+id;

    return this.http.delete<Hero>(url,this.httpOptions).pipe(
      tap((_ =>this.log('delete id='+id))),
      catchError(this.handleError<Hero>('delete hero id is: '+id))
    );
  }

  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()){return of([]);}
    
    const url = this.heroesUrl+"/?name="+term;
    return this.http.get<Hero[]>(url).pipe(
      tap(x => this.log('result for search heroes matching '+x)),
      catchError(this.handleError<Hero[]>('search hero'))
    );
  }
  
  private log(message : string){
    this.messageService.add("Heroes Service:"+message);
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
