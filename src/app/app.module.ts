import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule  } from 'ngx-masonry/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { LangsComponent } from './components/langs/langs.component';
import { PlacesComponent } from './pages/places/places.component';
import { CardsPipe } from './pipes/cards.pipe';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';
import { PlacesCardsComponent } from './components/cards/places-cards/places-cards.component';
import { ActivitiesCardsComponent } from './components/cards/activities-cards/activities-cards.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        CategoryListComponent,
        DetailsComponent,
        LangsComponent,
        PlacesComponent,
        CardsPipe,
        TestcomponentComponent,
        ActivitiesComponent,
        EventsComponent,
        PlacesCardsComponent,
        ActivitiesCardsComponent,
        WeatherComponent
    ],
    imports: [        
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule,
        NgxMasonryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
