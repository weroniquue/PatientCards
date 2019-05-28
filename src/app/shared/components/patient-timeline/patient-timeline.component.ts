import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {PatientDetails} from '../../models/patient/patient-details';
import {PatientList} from '../../models/patient/patient.module';
import {EverythingResponse} from '../../models/patient/everythingResponse';

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {

  @Input() id: string;

  private currentDate: Date;
  allInformation: EverythingResponse;

  constructor(private patientsService: PatientsService,
              private router: Router) {}

  ngOnInit() {

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);


    this.patientsService.getEverything(this.id)
      .subscribe(response => {
        console.log(response);
        this.allInformation = response;
        this.allInformation.entry = response.entry.filter(item =>
            item.resource.resourceType !== 'Patient'
          );

      }, () => {
        this.router.navigateByUrl('/pageNotFound');
      });
  }



}












