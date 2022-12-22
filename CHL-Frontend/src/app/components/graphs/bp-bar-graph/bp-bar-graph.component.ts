import { Component, Input, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { BloodPressure } from 'src/app/model/BloodPressure';
import { BMI } from 'src/app/model/BMI';
import { MedicalData } from 'src/app/model/medical-data';
import { GraphServiceService } from 'src/app/service/graph-service.service';
import { MedicalDataService } from 'src/app/service/medical-data/medical-data.service';

@Component({
  selector: 'bp-graph',
  templateUrl: './bp-bar-graph.component.html',
  styleUrls: ['./bp-bar-graph.component.scss']
})
export class BpBarGraphComponent implements OnInit {
  @Input('id') patientid!: number;

  constructor(private medicalDataService:MedicalDataService,private graphService: GraphServiceService) { }
  public BP: Object[] = [];

  public primaryXAxis: Object = {
    title: 'Date',
    valueType: 'Category',
    edgeLabelPlacement: 'Shift', 
    labelFormat: 'MMM',
    intervalType: 'Months',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'BP (in mmHg)',
    minimum: 50,
    maximum: 150,
    interval: 10,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  };


  public chartArea: Object = {
    border: {
      width: 0.2
    }
  };
  public segments: Object[] = [{
    color: 'url(#bpchart)'
  }];
  public segments2: Object[] = [{
    color: 'url(#bpchart2)'
  }];
  public circleMarker: Object = { visible: true, height: 7, width: 7, shape: 'Circle', isFilled: true };
  // public width: string = Browser.isDevice ? '100%' : '75%';
  public legend: Object = { visible: false };

  public tooltip: Object = {
    enable: true,
    header: '<b>Revenue</b>',
    format: '${point.x} : <b>${point.y}</b>',
    shared: true
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };
  // custom code end
  public title: string = 'Blood Pressure';

  ngOnInit(): void {
    let medicalData:MedicalData[]
    let pr: Object[] = [];
    let bp: BloodPressure
    
    this.medicalDataService.getAllMedicalDataById(this.patientid)
      .subscribe(response => {
        medicalData = response;
        for (let i in medicalData) {
          bp=new BMI()
          bp.id=medicalData[i].id
          bp.date=medicalData[i].uploadDate
          let bloodpressure:string[]=String(medicalData[i].bloodPressure).split("/")
          bp.systolic=bloodpressure[0]
          bp.diastolic=bloodpressure[1]
          pr.push(bp);
          console.log(pr);  
        }
        this.BP = pr;
      }
      )
  }

}


