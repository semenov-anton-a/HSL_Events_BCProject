import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

import {CategoryListComponent} from './components/category-list/category-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { LangsComponent } from './components/langs/langs.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryListComponent,
    DetailsComponent,
    CardsComponent,
    LangsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
 }
