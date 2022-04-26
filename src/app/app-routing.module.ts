import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { 
    IndexComponent, 
    DetailsComponent, 
    PlacesComponent 
} from './pages';

import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
    { path: "", component: IndexComponent, pathMatch: "full" },

    /**
     *  @RouteName
     *  PLACEs ROUTE
     */
    { path: 'places',    component: PlacesComponent },
    { path: 'place/:id', component: DetailsComponent },
    

    /**
     *  @RouteName
     *  ACTIVITIEs ROUTEp
     */
    { path: 'activities',   component: ActivitiesComponent },
    { path: 'activity/:id', component: DetailsComponent },
    
    /**
     *  @RouteName
     *  EVENTs ROUTE
     */
    { path: 'events',     component: EventsComponent },
    { path: 'event/:id',  component: DetailsComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
