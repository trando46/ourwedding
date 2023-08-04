import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PartialsComponent } from './components/partials/partials.component';
import { LandingComponent } from './components/landing/landing.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { GuestlistComponent } from './components/guestlist/guestlist.component';
import { UsComponent } from './components/us/us.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartialsComponent,
    LandingComponent,
    RsvpComponent,
    GuestlistComponent,
    UsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
