import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {

  constructor(private router: Router) { }
  btnstyle = {
    type:"button",
    styles: {
       background: '#fff',
       color: '#1CB5BD',
       height: '40px'}
    }
  ngOnInit(): void {
  }
  addPatient($event:any){
    this.router.navigate(['/addPatient']);
  }
  addDoctor($event:any){
    this.router.navigate(['/addDoctor']);
  }
}
