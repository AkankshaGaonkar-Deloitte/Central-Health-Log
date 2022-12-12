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
    let pr: Object[] = [];
    this.graphService.getBloodPressure().subscribe(data => {
      for (let i in data) {
        pr.push(data[i]);
        console.warn(data[i]);
      }
      this.BP = pr;
    }

    )
  }

}








   // custom code start
// public load(args: ILoadedEventArgs): void {
//     let selectedTheme: string = location.hash.split('/')[1];
//     selectedTheme = selectedTheme ? selectedTheme : 'Material';
//     args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
//     [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map((value: number, index: number) => {
//         this.dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });
//     });
// };
   // custom code end


