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

  @Input() searchName: string;

  itemsPerPage = 10;
  currentPage = 1;
  total = 0;
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
    this.filterPatients();
  }

  getPatients(): void {
      this.patientsService.getAllPatients()
        .subscribe(patient => {
          this.response = patient;
          this.patients = patient.entry;
          this.total = patient.total;
          //this.nextElements();
        });

  }

  //item.first_name.toLowerCase().indexOf(args.toLowerCase()) > -1
  filterPatients(): void {
    if (this.patients) {
      console.log(this.searchName);
      console.log(this.patients);
      this.patients.filter(item => {
        item.resource.name.forEach(name => {
          console.log(name.family.toLowerCase().indexOf(this.searchName.toLowerCase()));
        });
      });
    }
  }

  nextElements(): void {
    if (this.response.link.find(k => k.relation == 'next') !== undefined) {
      this.patientsService.getNextPage(this.response.link.find(k => k.relation == 'next').url)
        .subscribe(patient => {
          this.patients = this.patients.concat(patient.entry);
          this.response = patient;
          this.nextElements();
        });
    }
  }


  nextPage(event): void {
    this.currentPage = event;

  }
  showDetails(id) {
    this.router.navigateByUrl('/Patients/' + id)
      .catch(x => {
        console.error(x);
      });
  }

}
