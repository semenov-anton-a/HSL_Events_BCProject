import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

import {CategoryListComponent} from './pages/index/category-list/category-list.component';
import { CardsComponent } from './pages/index/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryListComponent,
    DetailsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
