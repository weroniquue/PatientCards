import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsListComponent} from './shared/components/patients-list/patients-list.component';

const routes: Routes = [
   { path: '', redirectTo: '/Patients', pathMatch: 'full' },
   { path: 'Patients', component: PatientsListComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
