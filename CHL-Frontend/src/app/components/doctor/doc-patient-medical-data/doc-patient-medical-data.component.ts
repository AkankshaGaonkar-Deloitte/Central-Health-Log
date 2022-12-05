import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-patient-medical-data',
  templateUrl: './doc-patient-medical-data.component.html',
  styleUrls: ['./doc-patient-medical-data.component.scss']
})
export class DocPatientMedicalDataComponent implements OnInit {

  constructor() { }
  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 1],'2': ['Medical Data', '/doc-medical-data', 0],
  '3': ['Medications', '/doc-medications', 0],'4': ['Past Records', '/doc-past-records', 0] };
  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}
  ngOnInit(): void {
  }

}
