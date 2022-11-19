import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  patientActive:boolean=true;
textBtnConfig={ type: "submit", styles: {height:'50px',width:'200px' } };
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }
  addPatient($event:any){
    this.patientActive=true;
  }
  addDoctor($event:any){
    this.patientActive=false;

  }
}
