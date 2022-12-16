
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientDetailsService } from 'src/app/service/patient-details/patient-details.service';
import { PatientRegService } from 'src/app/service/patient/patient-reg.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {


  tabs = { '1': ["Dashboard", "/patient-dashboard", 1], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Data", "/medical-data", 0], '4': ["Medications", '/medications', 0], '5': ["Past Records", "/past-records", 0] };
  bmi: boolean = false;
  pulse: boolean = false;
  bp: boolean = true;

  onClick(tab: any, menus: any) {
    for (let key in menus) {
      if (menus[key] == tab.value) {
        menus[key][1] = true;
    
        if (menus[key][0]=='BMI'){
          this.bmi=true
          this.pulse=false
          this.bp=false
        }
        else{
          if(menus[key][0]=='BLOOD PRESSURE'){
            this.bmi=false
          this.pulse=false
          this.bp=true
          }
          else{
            if(menus[key][0]=='PULSE RATE'){
              this.bmi=false
          this.pulse=true
          this.bp=false
            }
          }
        }
      } else {
        menus[key][1] = false;

      }
    }
  }

  menus = {
    '1': ['BLOOD PRESSURE', true], 
    '2': ['PULSE RATE', false],
    '3': ['BMI', false]
  };

  constructor(private patientDetailsService:PatientDetailsService) {
  }
  Userid!: string;
  patient=new Patient()
  ngOnInit(): void {
    let id=sessionStorage.getItem('user-id')
    this.patientDetailsService.getPatientByPatientId(Number(id))
      .subscribe(response => {     
        this.patient=response
      })
  }
}




