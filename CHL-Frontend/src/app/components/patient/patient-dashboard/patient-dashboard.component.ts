
import { Component, OnInit } from '@angular/core';
import { PastRecord } from 'src/app/model/past-record';
import { Patient } from 'src/app/model/patient';
import { PastRecordService } from 'src/app/service/past-record.service';

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

        if (menus[key][0] == 'BMI') {
          this.bmi = true
          this.pulse = false
          this.bp = false
        }
        else {
          if (menus[key][0] == 'BLOOD PRESSURE') {
            this.bmi = false
            this.pulse = false
            this.bp = true
          }
          else {
            if (menus[key][0] == 'PULSE RATE') {
              this.bmi = false
              this.pulse = true
              this.bp = false
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

  constructor(private pastRecordService: PastRecordService) {
  }
  Userid!: string;
  patient = new Patient()
  patientName!: string;
  appointments!: Number;
  diseases!: Number;
  lastHealthCheckup = new PastRecord()
  patientId!: number;
  
  ngOnInit(): void {
    this.patientName = String(sessionStorage.getItem('Patient-name'))
    this.patientId = Number(sessionStorage.getItem('user-id'))
    
    this.pastRecordService.NumberOfAppOintments(this.patientId ).subscribe(data => this.appointments = data)
    this.pastRecordService.TotalDiseases(this.patientId ).subscribe(data => this.diseases = data)
    this.pastRecordService.LastHealthCheckUp(this.patientId ).subscribe(data => this.lastHealthCheckup = data)

  }
}




