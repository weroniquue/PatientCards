import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {EntryEntity, Patient} from '../../models/patient/patient.module';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  itemsPerPage = 10;
  currentPage = 1;
  patients: EntryEntity[];
  response: Patient;

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
        console.log(x);
      });
  }

}
