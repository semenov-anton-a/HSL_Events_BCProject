import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { 
    IndexComponent, DetailsComponent, 
    PlacesComponent 
} from './pages';

const routes: Routes = [
    { path: "", component: IndexComponent, pathMatch: "full" },

    { path: 'd', component: DetailsComponent },

    { path: 'places', component: PlacesComponent },
    { path: 'activities', component: IndexComponent },
    { path: 'events', component: IndexComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
