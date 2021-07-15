import { AdminPageComponent } from './admin-page/admin-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PantPageComponent } from './pant-page/pant-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'landingpage',component:LandingPageComponent},
  {path:"pant-page",component:PantPageComponent},
  {path:"admin",component:AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
