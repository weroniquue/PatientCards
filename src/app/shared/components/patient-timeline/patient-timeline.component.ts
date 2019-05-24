import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {PatientDetails} from '../../models/patient/patient-details';

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {

  @Input() response: PatientDetails;

  private currentDate: Date;

  constructor() {}

  ngOnInit() {

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }



}












