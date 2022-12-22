import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { BMI } from 'src/app/model/BMI';
import { MedicalData } from 'src/app/model/medical-data';
import { GraphServiceService } from 'src/app/service/graph-service.service';
import { MedicalDataService } from 'src/app/service/medical-data/medical-data.service';

@Component({
  selector: 'app-area-graph',
  templateUrl: './area-graph.component.html',
  styleUrls: ['./area-graph.component.scss']
})
export class AreaGraphComponent implements OnInit {

  @Input('id')
  patientid!: number;

  public dataValues: Object[] = [];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    title: 'Date',
    valueType: 'Category',
    labelFormat: 'MMM',
    intervalType: 'Months',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };

  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    rangePadding: 'None',
    title: 'BMI (in kg/m2)',
    minimum: 13,
    maximum: 30,
    interval: 1,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  };
  public chartArea: Object = {
    border: {
      width: 0.2
    }
  };

  public circleMarker: Object = { visible: true, height: 7, width: 7, shape: 'Circle', isFilled: true };
  // public width: string = Browser.isDevice ? '100%' : '75%';



  public BMI: Object[] = [];
  public title: string = 'BMI';
  Userid!: string;



  public legend: Object = { visible: false };
  public segments: Object[] = [{
    color: 'url(#spring)'
  }];
  public tooltip: Object = {
    enable: true,
    header: 'BMI',
    // format: '{x} : <b>{y}</b>',
    // shared: true
  };

  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map((value: number, index: number) => {
      this.dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });
    });
  };
  // custom code end

  constructor(private medicalDataService: MedicalDataService,
    private datePipe: DatePipe, private graphService: GraphServiceService) { }

  ngOnInit(): void {
    let medicalData:MedicalData[]
    let pr: Object[] = [];
    let bmi: BMI
    this.medicalDataService.getAllMedicalDataById(this.patientid)
      .subscribe(response => {
        medicalData = response;
        for (let i in medicalData) {
          console.warn("md",medicalData[i]);
          bmi=new BMI()
          bmi.id=medicalData[i].id
          bmi.date=medicalData[i].uploadDate
          bmi.bmi=medicalData[i].bmi
          pr.push(bmi);
          console.log(pr);  
        }
        this.BMI = pr;
      }
      )
  }

}
