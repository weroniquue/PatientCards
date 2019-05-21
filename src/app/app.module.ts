import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { PatientsListComponent } from './shared/components/patients-list/patients-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule} from '@angular/material';
import { MglTimelineModule } from 'angular-mgl-timeline';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { PatientTimelineComponent } from './shared/components/patient-timeline/patient-timeline.component';
import {PatientDetailsComponent} from './shared/components/patient-details/patient-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    PatientsListComponent,
    PageNotFoundComponent,
    PatientTimelineComponent,
    PatientDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MglTimelineModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
