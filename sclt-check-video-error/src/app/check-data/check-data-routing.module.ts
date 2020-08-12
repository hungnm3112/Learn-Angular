import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckVideoComponent } from './check-video/check-video.component';
import { CheckImageComponent } from './check-image/check-image.component';

const routes: Routes = [  
      {path:"check-video/:url",component:CheckVideoComponent}, 
      {path:"check-image/:url",component:CheckImageComponent}        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckDataRoutingModule { }



