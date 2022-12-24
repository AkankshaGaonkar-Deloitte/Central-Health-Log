import { Component, Input, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { MedicalData } from 'src/app/model/medical-data';
import { Pulse } from 'src/app/model/Pulse';
import { GraphServiceService } from 'src/app/service/graph-service.service';
import { MedicalDataService } from 'src/app/service/medical-data/medical-data.service';

@Component({
  selector: 'pulse-line-graph',
  templateUrl: './pulse-line-graph.component.html',
  styleUrls: ['./pulse-line-graph.component.scss']
})
export class PulseLineGraphComponent implements OnInit {
  @Input('id') patientid!: number;

  constructor(private medicalDataService:MedicalDataService,private graphService: GraphServiceService) { }
  public pulseRate: Object[] = [];
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
    title: 'Pulse Rate (Beats/minute)',
    minimum: 50,
    maximum: 140,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  };
 
  public chartArea: Object = {
    border: {
      width: 0.2
    }
  };
  public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true };
  // public width: string = Browser.isDevice ? '100%' : '75%';
  public legend: Object = { visible: false };
  public segments: Object[] = [{
     
  
      color: 'url(#pulse)'
  }];
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
  public title: string = 'Pulse Rate';

  ngOnInit(): void {
    let medicalData:MedicalData[]
    let pulse: Pulse
    let pr: Object[] = [];
    this.medicalDataService.getAllMedicalDataById(this.patientid)
      .subscribe(response => {
        medicalData = response;
        for (let i in medicalData) {
          pulse=new Pulse()
          pulse.id=medicalData[i].id
          pulse.date=medicalData[i].uploadDate
          pulse.pulse=medicalData[i].pulseRate
          pr.push(pulse);
        }
        this.pulseRate = pr;
      }
      )
  }

}

