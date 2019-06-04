import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObservationType} from '../models/Enums';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {


  private localUrl = 'http://localhost:8080/baseDstu3';
  private observationUrl = this.localUrl + '/Observation';

  private bmiCode = '39156-5';
  private weigthCode = '29463-7';
  private temperatureCode = '29463-7';

  constructor(private http: HttpClient) { }

  getObservation(id: string, type: ObservationType): Observable<Observation> {
    switch (type) {
      case ObservationType.TEMPERATURE: {
        return this.getData(id, this.temperatureCode)
        break;
      }
      case ObservationType.BMI: {
        return  this.getData(id, this.bmiCode)
        break;
      }
      case ObservationType.WEIGHT: {
        return this.getData(id, this.weigthCode)
        break;
      }
    }
  }

  getData(id: string, code: string) {
    return this.http.get<Observation>(this.observationUrl + '?patient=' + id + '&code=' + code + '&_sort=date');
  }

  //loadMoreData(url:String): Observable<Observation>{
    //return this.http.get<Observation>(url + '?patient=' + id + '&code=' + code + '&_sort=date');
  //}

}
