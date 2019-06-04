import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../services/patients.service';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {ObservationService} from '../../services/observation.service';
import {DatePipe} from '@angular/common';
import {ObservationType} from '../../models/Enums';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  id: string;
  bmiRespone: Observation;
  weightResponse: Observation;
  message: String;

  public BMIData: ChartDataSets[] = [
    { data: [], label: 'BMI' },
  ];

  public lineChartLabelsBMI: Label[] = [];

  public weightData: ChartDataSets[] = [
    { data: [], label: 'Weight' },
  ];
  public lineChartLabelsWeight: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        type: 'time',
        time: {
          unit: 'quarter'
        }
      }],
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
              private observationService: ObservationService,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getBMI();
    this.getWeight();
  }

  getBMI() {
    this.observationService.getObservation(this.id, ObservationType.BMI)
      .subscribe(response => {
        this.bmiRespone = response;
        if (this.bmiRespone.entry) {
          const bmi = [];
          this.bmiRespone.entry.forEach(item => {

            const date = this.datepipe.transform(item.resource.effectiveDateTime, 'yyyy-MM-dd hh:mm');
            this.lineChartLabelsBMI.push(date);
            bmi.push(item.resource.valueQuantity.value.toFixed(2));
          });

          this.BMIData[0].data = bmi;
          this.BMIData[0].label = 'BMI ' + this.bmiRespone.entry[0].resource.valueQuantity.unit;
        } else {
          this.message = 'Data are not available';
        }
      });
  }

  getWeight() {
    this.observationService.getObservation(this.id, ObservationType.WEIGHT)
      .subscribe(response => {
        this.weightResponse = response;
        if (this.weightResponse.entry) {
          console.log(this.weightResponse)
          const weight = [];
          this.weightResponse.entry.forEach(item => {

            const date = this.datepipe.transform(item.resource.effectiveDateTime, 'yyyy-MM-dd hh:mm');
            this.lineChartLabelsWeight.push(date);
            weight.push(item.resource.valueQuantity.value.toFixed(2));
          });
          this.weightData[0].data = weight;
          this.weightData[0].label = 'weight ' + this.weightResponse.entry[0].resource.valueQuantity.unit;
        } else {
          this.message = 'Data are not available';
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
