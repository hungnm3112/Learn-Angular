import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-check-video',
  templateUrl: './check-video.component.html',
  styleUrls: ['./check-video.component.css']
})
export class CheckVideoComponent implements OnInit {  
  route : ActivatedRoute;
  url : String;
  url$ : Observable<String>;

  constructor(route : ActivatedRoute) {    
    this.route = route;    
  }

  ngOnInit(){
    this.route.paramMap.subscribe(param =>{
      this.url = param.get("url");
    });     
    
  }

  goToCheck(url: String){

  }

}
