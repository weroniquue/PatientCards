import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {PatientsService} from '../../services/patients.service';
import {PatientList, Entry} from '../../models/patient/patient.module';
import {Router} from '@angular/router';



@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit, OnChanges {

  // TODO sprawdź typ
  @Input() searchResponse: any;

  itemsPerPage = 10;
  currentPage = 1;
  patients: Entry[];
  response: PatientList;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router,
              private patientsService: PatientsService) {

    this.matIconRegistry.addSvgIcon(
      `patient`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/medical-report.svg')
    );
  }

  ngOnInit() {
    this.getPatients();
  }

  // search
  ngOnChanges(changes: SimpleChanges) {
    this.patients = this.searchResponse;
  }

  getPatients(): void {
      this.patientsService.getAllPatients()
        .subscribe(patient => {
          this.response = patient;
          this.patients = patient.entry;
        });
  }


  nextPage(event): void {
    if ((this.patients.length / event) == this.itemsPerPage) {
      this.patientsService.getNextPage(this.response.link.find(k => k.relation == 'next').url)
        .subscribe(patient => {
          this.patients = this.patients.concat(patient.entry);
          this.response = patient;
        });
    }
    this.currentPage = event;

  }

  showDetails(id) {
    this.router.navigateByUrl('/Patients/' + id)
      .catch(x => {
        console.error(x);
      });
  }

}
