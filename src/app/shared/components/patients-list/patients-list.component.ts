import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  links = [1, 2, 3, 4];

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router) {
    this.matIconRegistry.addSvgIcon(
      `patient`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/medical-report.svg')
    );
  }

  ngOnInit() {
  }

  showDetails(id) {
    this.router.navigateByUrl('/Patients/' + id)
      .catch(x => {
        console.log(x);
      });
  }

}
