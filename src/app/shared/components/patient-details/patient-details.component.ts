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
  response: PatientDetails;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private patientsService: PatientsService) { }

  ngOnInit() {
    this.getPatientDetails();
  }

  getPatientDetails(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.patientsService.getDetails(this.id)
      .subscribe(response => {
        // console.log(response);
        this.response = response;
      }, () => {
        this.router.navigateByUrl('/pageNotFound');
      });


  }



}
