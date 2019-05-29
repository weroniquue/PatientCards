import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientList} from '../models/patient/patient.module';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {


  private localUrl = 'http://localhost:8080/baseDstu3';
  private observationUrl = this.localUrl + '/Observation';

  private bmiCode = '39156-5';

  constructor(private http: HttpClient) { }

  getBMI(id: string): Observable<Observation> {
    return this.http.get<Observation>(this.observationUrl + '?patient=' + id + '&code=' + this.bmiCode + '&_sort=date');
  }
}
