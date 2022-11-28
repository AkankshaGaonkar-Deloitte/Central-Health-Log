
import { Component, OnInit } from '@angular/core';
import { DateTime } from '@syncfusion/ej2-ng-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { Pulse } from 'src/app/model/Pulse';
import { GraphServiceService } from 'src/app/service/graph-service.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent {


  tabs = { '1': ["Dashboard", "/patient-dashboard", 1], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Pulse", "/medical-Pulse", 0], '4': ["Medications", '/medications', 0], '5': ["Past Records", "/past-records", 0] };
  // pulse:Pulse=new Pulse();
  pulse!: Array<Pulse>;
  pulseRate!: Array<Number>;
  date!: Array<Date>;



  public SystemName: string = "Pulse";
  firstCopy = false;
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }
  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  public lineChartData: Array<Number> = [];
  public lineChartLabels: Array<Date> = [];

  public labelMFL: Array<any> = [
    {
      data: this.lineChartData,
      label: this.SystemName
      
    }
  ];

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 60,
          min: 0,
        }
      }],
      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: "#222",
        fill: true,
        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };

  _lineChartColors: Array<any> = [{
    backgroundColor: 'red',
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointBorderColor: 'red',
    pointHoverBackgroundColor: 'red',
    pointHoverBorderColor: 'red'
  }];


  onClick() {
    console.warn(" inside btn " + typeof(this.lineChartLabels));
    console.warn("my data " + this.lineChartData);

  }
  constructor(private graphService: GraphServiceService) {
    this.graphService.getPulse().subscribe(data => {
      console.warn(data);
      console.warn(data[0].pulse);

      for (let i in data) {
        this.lineChartLabels.push(data[i].date);
        this.lineChartData.push(data[i].pulse);
      }
      console.warn("my label iS " + this.lineChartLabels);
    console.warn("my data " + this.lineChartData);
    })
  }
}

  


    
  


    // this.lineChartLabels=DateArry;
    // this.lineChartData=pulseRate;
    // console.warn('hi',this.lineChartLabels)
    // console.warn('hi',this.lineChartData)
