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
  
  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 1],'2': ['Medical Data', '/doctor/patient/medical-data', 0],
  '3': ['Medications', '/doctor/patient/medication', 0],'4': ['Past Records', '/doctor/patient/past-records', 0] };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}
  bmi: boolean = false;
  pulse: boolean = false;
  bp: boolean = true;

  // onClick() {
  //   window.location.reload();
  // }
  onClick(tab: any, menus: any) {
    for (let key in menus) {
      if (menus[key] == tab.value) {
        menus[key][1] = true;
    
        if (menus[key][0]=='BMI'){
          console.log(menus[key][0]);
          this.bmi=true
          this.pulse=false
          this.bp=false
        }
        else{
          if(menus[key][0]=='BLOOD PRESSURE'){
            console.log(menus[key][0]);
            this.bmi=false
          this.pulse=false
          this.bp=true
          }
          else{
            if(menus[key][0]=='PULSE RATE'){
              console.log(menus[key][0]);
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

  Graphmenus = {
    '1': ['BLOOD PRESSURE', true], 
    '2': ['PULSE RATE', false],
    '3': ['BMI', false]
  };


}
