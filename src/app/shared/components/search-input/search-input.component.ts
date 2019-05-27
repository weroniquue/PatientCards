import { Component, OnInit } from '@angular/core';
import {Patient} from '../../models/patient/patient.module';
import {PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  //TODO albo zwróci pateint albo patientdetails
  searchResponse: any;
  searchName: string;


  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
  }

  findPatientByName(event: any): void {
    this.searchName = event.target.value;

  }

  search(): void {
    if (this.searchName !== '') {

      this.patientsService
        .findPatientByName(this.searchName)
        .subscribe(response => {
          this.searchResponse = response;
        }, () => {
          console.error('Error');
        });
    }

  }

}
