import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckDataRoutingModule } from './check-data-routing.module';
import { CheckVideoComponent } from './check-video/check-video.component';
import { CheckImageComponent } from './check-image/check-image.component';


@NgModule({
  declarations: [CheckVideoComponent, CheckImageComponent],
  imports: [
    CommonModule,
    CheckDataRoutingModule
  ]
})
export class CheckDataModule { }
