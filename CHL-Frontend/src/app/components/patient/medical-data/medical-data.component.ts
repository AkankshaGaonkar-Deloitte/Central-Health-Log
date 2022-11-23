import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.scss']
})
export class MedicalDataComponent implements OnInit {

  constructor() { }
  tab={'1':["Dashboard","/patient-dashboard",0],'2':["Personal Details","/personal-details",0],'3':["Medical Data","/medical-data",0],'4':["Medications","/medications",0],'5':["Past Records","/past-records",0]}
  ngOnInit(): void {
  }

}
