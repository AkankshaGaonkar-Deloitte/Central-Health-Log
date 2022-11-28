import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { GraphServiceService } from 'src/app/service/graph-service.service';

@Component({
  selector: 'pulse-line-graph',
  templateUrl: './pulse-line-graph.component.html',
  styleUrls: ['./pulse-line-graph.component.scss']
})
export class PulseLineGraphComponent implements OnInit {

  constructor(private graphService: GraphServiceService) { }
  public pulseRate: Object[]=[] ;
  public primaryXAxis: Object = {
    title: 'Date',
    valueType: 'Category',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'Pulse Rate',
    minimum: 0,
    maximum: 150,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  };
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
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
  public title: string = 'Pulse Rate';

  ngOnInit(): void {
    let pr:Object[]=[];
    this.graphService.getPulse().subscribe(data =>{
    for(let i in data) {
      pr.push(data[i]);
      console.warn(data[i]);
    }
    this.pulseRate=pr;
  }
    
    )
  }

}
