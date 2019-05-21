import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsListComponent} from './shared/components/patients-list/patients-list.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
   { path: '', redirectTo: '/Patients', pathMatch: 'full' },
   { path: 'Patients', component: PatientsListComponent },
   { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
