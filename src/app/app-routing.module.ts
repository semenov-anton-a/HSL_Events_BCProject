import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { 
    IndexComponent, DetailsComponent, 
    PlacesComponent 
} from './pages';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
    { path: "", component: IndexComponent, pathMatch: "full" },

    { path: 'd', component: DetailsComponent },

    { path: 'places',     component: PlacesComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'events',     component: EventsComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
