import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {

  id: number;
  private sub: any;
  private currentDate: Date;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log(this.id);

      if (Number.isNaN(this.id)) {
        this.router.navigateByUrl('/pageNotFound');
      }
    });
  }

}











