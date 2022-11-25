import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {

  tabs={'1':["Dashboard","/patient-dashboard",1],'2':["Personal Details","/personal-details",0],'3':["Medical Pulse","/medical-Pulse",0],'4':["Medications",'/medications',0],'5':["Past Records","/past-records",0]};
  // url = 'http://localhost:8080/pulse';
  // data!: Pulse[];
  // date=[];
  // pulse !:any[];
  // chart =[];

  public SystemName: string = "BP";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 100,80,49];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["2018-01-29 ", "2018-01-29 ", "2018-01-29 "];
  
  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
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

        font: {
          family: 'FontAwesome',
          size: 14
        },
      
      },
      deferred: false

    },

  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }
}
