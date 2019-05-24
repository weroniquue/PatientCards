import {Component, Input, OnInit} from '@angular/core';
import {PatientDetails} from '../../models/patient/patient-details';

@Component({
  selector: 'app-patient-details-subpage',
  templateUrl: './patient-details-subpage.component.html',
  styleUrls: ['./patient-details-subpage.component.css']
})
export class PatientDetailsSubpageComponent implements OnInit {

  @Input() response: PatientDetails;

  constructor() { }

  ngOnInit() {
    console.log(this.response);
  }

}
