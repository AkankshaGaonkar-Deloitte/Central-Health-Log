import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
patient=new Patient()
  patientId!: string|number|null;
GetPatient() {
this.patientService.getPatientDetailsById(this.patientId as number).subscribe(data =>{this.patient=data; console.warn(this.patient.phoneNo);});
console.log('after');


}
 
  constructor(private patientService:PatientService) { }
  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 0],'2': ['Medical Data', '/doctor/patient/medical-data', 1],
  '3': ['Medications', '/doctor/patient/medication', 0],'4': ['Past Records', '/doctor/patient/past-records', 0] };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}
  ngOnInit(): void {
  }
  searchPatientId = {
    type: 'text',
    label: 'to',
    placeholder: 'patient id',
    styling: {
    width: '18em',
    height: '2.5em',
    background: '#FFFFFF',
    border: '0.0625em solid #949494',
    borderRadius: '0.25em'
    },
    validations: {
    required: 'false',
    minLength: '',
    maxLength: '',
    pattern: '',
    min: '6',
    max: '10'
    },
    patternErrorMessage: ''
    };
  

}
