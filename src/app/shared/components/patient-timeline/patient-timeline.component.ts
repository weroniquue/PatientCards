import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {PatientDetails} from '../../models/patient/patient-details';
import {Entry, PatientList} from '../../models/patient/patient.module';
import {EntryEntity, EverythingResponse} from '../../models/patient/everythingResponse';

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {

  @Input() id: string;

  private currentDate: Date;
  allInformation: EverythingResponse;
  details: EntryEntity[];
  more = true;

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
        this.details = this.filterList(response.entry);
      }, () => {
        this.router.navigateByUrl('/pageNotFound');
      });
  }


  moreInformation() {
    if(this.allInformation.link.find(k => k.relation === 'next') == undefined){
      this.more = false;
    }

    if (this.more) {
      this.patientsService.getMoreEverything(this.allInformation.link.find(k => k.relation === 'next').url)
        .subscribe(response => {
          this.allInformation = response;
          this.details = this.details.concat(this.filterList(response.entry));
        }, () => {
          this.router.navigateByUrl('/pageNotFound');
        });
    }
  }

  filterList(array) {
    return array.filter(item =>
      (item.resource.resourceType == 'Observation'
        || item.resource.resourceType == 'MedicationRequest'
        || item.resource.resourceType == 'MedicationStatement')
    );
  }

  sortArray(array) {
    return array.sort(function (a, b) {
      return +new Date(b.resource.effectiveDateTime) - +new Date(a.resource.effectiveDateTime);
    });
  }

  showCharts() {
    this.router.navigateByUrl('/Patients/' + this.id + '/charts');
  }
}












