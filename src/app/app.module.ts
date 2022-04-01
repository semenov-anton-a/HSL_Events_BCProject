import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { LangsComponent } from './components/langs/langs.component';
import { PlacesComponent } from './pages/places/places.component';
import { CardsPipe } from './pipes/cards.pipe';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        CategoryListComponent,
        DetailsComponent,
        CardsComponent,
        LangsComponent,
        PlacesComponent,
        CardsPipe,
        MapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCC3qK6wGayyJDCP4dz5efeDfczNMnBWk',
      libraries: ['places']
    })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
