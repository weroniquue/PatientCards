import { Component, OnInit } from '@angular/core';
import {PatientList} from '../../models/patient/patient.module';
import {PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchName: string;
  searchResponse: PatientList;

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
  }

  findPatientByName(event: any): void {
    this.searchName = event.target.value;
  }

  search() {
    console.log('Szukaj z nazwą: ' + this.searchName);
    this.patientsService.findPatientByName(this.searchName)
      .subscribe(response => {
        this.searchResponse = response;
        console.log(response);
      });
  }


}
