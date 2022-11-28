
import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { Pulse } from 'src/app/model/Pulse';
import { GraphServiceService } from 'src/app/service/graph-service.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {


  tabs = { '1': ["Dashboard", "/patient-dashboard", 1], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Pulse", "/medical-Pulse", 0], '4': ["Medications", '/medications', 0], '5': ["Past Records", "/past-records", 0] };

  onClick() {
    window.location.reload();

  }
  constructor() {
  }

  ngOnInit(): void {

  }
}




