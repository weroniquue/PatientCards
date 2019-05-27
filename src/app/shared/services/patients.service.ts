import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Patient} from '../models/patient/patient.module';
import {PatientDetails} from '../models/patient/patient-details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patientsUrl = 'http://hapi.fhir.org/baseDstu3/Patient';
  private patientsUrlJson = 'http://hapi.fhir.org/baseDstu3/Patient?_format=json&_pretty=true';


  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient> {
    return this.http.get<Patient>(this.patientsUrl);
  }

  getNextPage(url: string): Observable<Patient> {
    return this.http.get<Patient>(url);
  }

  getDetails(id: string): Observable<PatientDetails> {
    return this.http.get<PatientDetails>(this.patientsUrl + '/' + id + '/$everything');
  }

  // TODO
  findPatientByName(name: string): Observable<any> {
    if (!name.trim()) {
      return of([]);
    }
    console.log(name + 'Service');

    console.log('TODO FIND PATIENT- service');
    return of([]);
    //this.http.get<any>();
  }

}
