
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import {
    IndexComponent,
    DetailsComponent,
    PlacesComponent ,
} from './pages';

import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './blog/blog.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
    { path: "", component: IndexComponent, pathMatch: "full" },

    /**
     *  @RouteName
     *  PLACEs ROUTE
     */
    { path: 'favorites',       component: FavoritesComponent, },
    { path: 'favorites/:tag',  component: FavoritesComponent },
    { path: 'favorites/:id',    component: DetailsComponent },
    
    { path: 'places',       component: PlacesComponent },
    { path: 'places/:tag',  component: PlacesComponent },
    { path: 'place/:id',    component: DetailsComponent },
    

    /**
     *  @RouteName
     *  ACTIVITIEs ROUTEp
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

    /**
     *  @RouteName
     *  EVENTs ROUTE
     */
    { path: 'blog',     component: BlogComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
