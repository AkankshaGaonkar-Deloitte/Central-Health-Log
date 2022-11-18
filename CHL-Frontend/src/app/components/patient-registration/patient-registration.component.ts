import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {

  constructor() { }
  btnstyle = {
    type:"button",
    styles: {
       background: '#fff',
       color: '#1CB5BD',
       height: '40px'}
    }
  ngOnInit(): void {
  }

}
