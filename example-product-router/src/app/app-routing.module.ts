import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoRouterComponent } from './demo-router/demo-router.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'product/:productId',component:DemoRouterComponent },
  { path: '',   component:AppComponent, pathMatch: 'full' },  
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
