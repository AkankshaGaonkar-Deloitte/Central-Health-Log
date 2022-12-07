import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/model/patient/medication';
import { MedicationService } from 'src/app/service/medication/medication.service';

@Component({
  selector: 'app-add-medical-record',
  templateUrl: './add-medical-record.component.html',
  styleUrls: ['./add-medical-record.component.scss']
})
export class AddMedicalRecordComponent implements OnInit {

  patientId: number = 43190
  allMedicalDataOfAPatient: Medication[] = []

  textBtnConfig2 = {
    type: "submit",
    styles: {
      background: '#1CB5BD',
      color: '#fff',
      height: '2em',
      width: '8em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',

    }
  };

  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 0],'2': ['Medical Data', '/doctor/patient/medical-data', 0],
  '3': ['Medications', '/doctor/patient/medication', 0],'4': ['Past Records', '/doctor/patient/past-records', 1] };
  
  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}

  textBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#1CB5BD',
      height: '2em',
      width: '8em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',

    }
  };

  heightConfig = {
    type: 'number',
    label: 'Height',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '1',
      maxLength: '2',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medicationService.getAllPatientRecords(this.patientId)
      .subscribe(response => {
        this.allMedicalDataOfAPatient = response
        console.log(this.allMedicalDataOfAPatient);
        
      }
    )
  }

  removeOrDeleteMedication(id?: number){
    this.medicationService.removeOrDeleteMedication(id)
      .subscribe(
        response => {
          this.medicationService.getAllPatientRecords(this.patientId)
            .subscribe(data => this.allMedicalDataOfAPatient = data)
        }
      )
  }

  

}
