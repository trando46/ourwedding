import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UsComponent } from './components/us/us.component';

const routes: Routes = [
  // adding the route to home

  {path:'home', component:HomeComponent},
  {path:'main', component:MainpageComponent},
  {path:'us',component:UsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
