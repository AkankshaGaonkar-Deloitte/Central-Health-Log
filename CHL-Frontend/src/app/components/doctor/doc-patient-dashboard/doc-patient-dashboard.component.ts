import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-patient-dashboard',
  templateUrl: './doc-patient-dashboard.component.html',
  styleUrls: ['./doc-patient-dashboard.component.scss']
})
export class DocPatientDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 1],'2': ['Medical Data', '/doc-patient-medical-data', 0],
  '3': ['Medications', '/doc-patient-medication', 0],'4': ['Past Records', '/doc-patient-past-records', 0] };
  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}
  onClick() {
    window.location.reload();

  }

}
