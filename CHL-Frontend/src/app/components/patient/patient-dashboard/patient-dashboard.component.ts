
import { Component, OnInit } from '@angular/core';

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

  menus = {
    '1': ['BLOOD PRESSURE', true], 
    '2': ['PULSE RATE', false],
    '3': ['BMI', false]
  };

  constructor() {
  }
  Userid!: string;
  ngOnInit(): void {

    console.warn(Number(sessionStorage.getItem(this.Userid)))
  }
}




