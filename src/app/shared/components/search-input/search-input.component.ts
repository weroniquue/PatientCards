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

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
  }

  findPatientByName(event: any): void {
    this.searchName = event.target.value;

  }
}
