import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PatientList} from '../models/patient/patient.module';
import {PatientDetails} from '../models/patient/patient-details';
import {EverythingResponse} from '../models/patient/everythingResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private localUrl = 'http://localhost:8080/baseDstu3';
  private patientsUrl = this.localUrl + '/Patient';
  // private patientsUrl = 'http://hapi.fhir.org/baseDstu3/Patient';

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<PatientList> {
    return this.http.get<PatientList>(this.patientsUrl);
  }

  getNextPage(url: string): Observable<PatientList> {
    return this.http.get<PatientList>(url);
  }


  findPatientByName(name: string): Observable<PatientList> {
    return this.http.get<PatientList>(this.patientsUrl + '/' + '?name=' + name);
  }

  getDetails(id: string): Observable<PatientDetails> {
    return this.http.get<PatientDetails>(this.patientsUrl + '/' + id, httpOptions);
  }

  getEverything(id: string): Observable<EverythingResponse> {
    return this.http.get<EverythingResponse>(this.patientsUrl + '/' + id + '/$everything', httpOptions);
  }


}
