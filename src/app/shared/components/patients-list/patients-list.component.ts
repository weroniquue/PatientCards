import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {PatientsService} from '../../services/patients.service';
import {Entry, PatientList} from '../../models/patient/patient.module';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit, OnChanges {

  @Input() searchResponse: PatientList;

  itemsPerPage = 10;
  currentPage = 1;
  patients: Entry[];
  response: PatientList;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private patientsService: PatientsService) {

    this.matIconRegistry.addSvgIcon(
      `patient`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/medical-report.svg')
    );
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      const page = params['page'];
      this.getPatients();
    });
  }

  // search
  ngOnChanges(changes: SimpleChanges) {
    if (this.searchResponse) {
      console.log(this.searchResponse);
      this.response = this.searchResponse;
      this.patients = this.searchResponse.entry;
    }
  }

  getPatients(): void {
      this.patientsService.getAllPatients()
        .subscribe(patient => {
          this.response = patient;
          this.patients = patient.entry;
          this.response.total = patient.total ? patient.total : 9000;
        });
  }

  nextPage(event): void {

    this.nextElements();
    this.currentPage = event;
  }


  nextElements(): void {
    if (this.response.link.find(k => k.relation == 'next') !== undefined) {
      this.patientsService.getNextPage(this.response.link.find(k => k.relation == 'next').url)
        .subscribe(patient => {
          this.patients = this.patients.concat(patient.entry);
          this.response = patient;
          // this.nextElements();
        });
    }
  }

  showDetails(id) {
    this.router.navigateByUrl('/Patients/' + id)
      .catch(x => {
        console.error(x);
      });
  }

}
