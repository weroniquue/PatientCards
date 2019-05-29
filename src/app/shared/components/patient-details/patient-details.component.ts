import { Component, OnInit } from '@angular/core';
import {PatientDetails} from '../../models/patient/patient-details';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {PatientList} from '../../models/patient/patient.module';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private patientsService: PatientsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

  }

}
