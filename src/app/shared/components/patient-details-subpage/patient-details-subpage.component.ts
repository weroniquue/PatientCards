import {Component, Input, OnInit} from '@angular/core';
import {PatientDetails} from '../../models/patient/patient-details';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-patient-details-subpage',
  templateUrl: './patient-details-subpage.component.html',
  styleUrls: ['./patient-details-subpage.component.css']
})
export class PatientDetailsSubpageComponent implements OnInit {

  //@Input() response: PatientDetails;

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
