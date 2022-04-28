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
    { path: 'places',       component: PlacesComponent },
    { path: 'places/:tag',  component: PlacesComponent },
    { path: 'place/:id',    component: DetailsComponent },
    

    /**
     *  @RouteName
     *  ACTIVITIEs ROUTE
     */
    { path: 'activities',       component: ActivitiesComponent },
    { path: 'activities/:tag',  component: ActivitiesComponent },
    { path: 'activity/:id',     component: DetailsComponent },
    
    /**
     *  @RouteName
     *  EVENTs ROUTE
     */
    { path: 'events',       component: EventsComponent },
    { path: 'events/:tag',  component: EventsComponent },
    { path: 'event/:id',    component: DetailsComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
