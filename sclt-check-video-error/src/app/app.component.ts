import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sclt-check-video-error';
  url = 'https://suachualaptop24h.com/tin-cong-ty/huong-dan-dat-lich-sua-laptop-nhanh-chong-cho-doi-da-la-di-vang-n6971.html';
  route : ActivatedRoute;  

  constructor(route : ActivatedRoute) {    
    this.route = route;    
  }

  ngOnInit(){
        
  }
}
