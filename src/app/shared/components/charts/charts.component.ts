import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientDetails} from '../../models/patient/patient-details';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {ObservationService} from '../../services/observation.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  id: string;
  bmiRespone: Observation;

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'BMI' },
  ];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';


  @ViewChild(BaseChartDirective) chart: BaseChartDirective;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private patientsService: PatientsService,
              private observationService: ObservationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getBMI();
  }

  getBMI() {
    this.observationService.getBMI(this.id)
      .subscribe(response => {
        console.log(response);
        this.bmiRespone = response;
        if (this.bmiRespone) {
          this.bmiRespone.entry.forEach(item => {
            this.lineChartLabels.push(item.resource.effectiveDateTime);
            this.lineChartData[0].data.push(item.resource.valueQuantity.value);
          });
        }


      });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
