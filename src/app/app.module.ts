import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Google MAPs
import { GoogleMapsModule } from '@angular/google-maps'

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
import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';
import { PlacesCardsComponent } from './components/cards/places-cards/places-cards.component';
import { ActivitiesCardsComponent } from './components/cards/activities-cards/activities-cards.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { EventsCardsComponent } from './components/cards/events-cards/events-cards.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PlaceComponent } from './components/details/place/place.component';
import { ActivityComponent } from './components/details/activity/activity.component';
// import { FutureweatherComponent } from './futureweather/futureweather.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MonthModalComponent } from './components/details/activity/modals/month-modal/month-modal.component';
import { OpeningHoursModalComponent } from './components/details/activity/modals/opening-hours-modal/opening-hours-modal.component';
import { MoreInfoModalComponent } from './components/details/activity/modals/more-info-modal/more-info-modal.component';
import { EventComponent } from './components/details/event/event.component';
import { BtnLoaddataComponent } from './components/btn-loaddata/btn-loaddata.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { tagsActivities } from './pipes/tagsActivities.pipe';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        CategoryListComponent,
        DetailsComponent,
        LangsComponent,
        PlacesComponent,
        CardsPipe,
        ActivitiesComponent,
        EventsComponent,
        PlacesCardsComponent,
        ActivitiesCardsComponent,
        GoogleMapComponent,
        EventsCardsComponent,
        WeatherComponent,
        PlaceComponent,
        ActivityComponent,
        MonthModalComponent,
        OpeningHoursModalComponent,
        MoreInfoModalComponent,
        EventComponent,
        BtnLoaddataComponent,
        TagListComponent,
        tagsActivities
    
        // FutureweatherComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        GoogleMapsModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule,
        NgxMasonryModule,
        // ModalModule.forRoot(),
        NgbModule

    ],
    entryComponents: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
