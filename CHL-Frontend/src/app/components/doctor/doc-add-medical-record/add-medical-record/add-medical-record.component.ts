import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-medical-record',
  templateUrl: './add-medical-record.component.html',
  styleUrls: ['./add-medical-record.component.scss']
})
export class AddMedicalRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 1],'2': ['Medical Data', '/doc-medical-data', 0],
  '3': ['Medications', '/doc-medications', 0],'4': ['Past Records', '/doc-past-records', 0] };
  
  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}

}
