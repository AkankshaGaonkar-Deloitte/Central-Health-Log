import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { GraphServiceService } from 'src/app/service/graph-service.service';

@Component({
  selector: 'bp-graph',
  templateUrl: './bp-bar-graph.component.html',
  styleUrls: ['./bp-bar-graph.component.scss']
})
export class BpBarGraphComponent implements OnInit {

  constructor(private graphService: GraphServiceService) { }
  public BP: Object[]=[] ;
  public primaryXAxis: Object = {
    title: 'Date',
    valueType: 'Category',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'BP (in mmHg)',
    minimum: 50,
    maximum: 150,
    interval: 10,
    lineStyle: { width: 0},
    majorTickLines: { width: 0 },
  };
  public chartArea: Object = {
    border: {
      width: 0.2
    }
  };
  public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true };
  // public width: string = Browser.isDevice ? '100%' : '75%';
  public tooltip: Object = {
    enable: true
  };
  public legend: Object = {
    visible: true,
    enableHighlight: true
  }
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };
  // custom code end
  public title: string = 'Blood Pressure';
  ngOnInit(): void {
    let pr:Object[]=[];
    this.graphService.getBloodPressure().subscribe(data =>{
    for(let i in data) {
      pr.push(data[i]);
      console.warn(data[i]);
    }
    this.BP=pr;
  }
    
    )
  }

}
