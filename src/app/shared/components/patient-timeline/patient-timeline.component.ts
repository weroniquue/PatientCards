import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {

  id: string;
  private currentDate: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private patientsService: PatientsService) {}

  ngOnInit() {

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    this.getPatientDetails();
  }

  getPatientDetails(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.patientsService.getDetails(this.id)
      .subscribe(response => {
        console.log(response);
      }, () => {
        this.router.navigateByUrl('/pageNotFound');
      });
  }

}












