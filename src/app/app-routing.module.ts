import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent , DetailsComponent } from './pages';

const routes: Routes = [
    { path: 'd', component: DetailsComponent },
    { path: '', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
