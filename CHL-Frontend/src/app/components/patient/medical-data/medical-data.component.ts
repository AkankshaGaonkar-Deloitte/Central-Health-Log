import { DatePipe, formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MedicalData } from 'src/app/model/medical-data';
import { MedicalDataService } from 'src/app/service/medical-data/medical-data.service';
import { MedicationService } from 'src/app/service/medication/medication.service';

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.scss'],
})
export class MedicalDataComponent implements OnInit {

  patientId:number = 43190
  medicalData: MedicalData = new MedicalData()

  textDropConfig = {
      styles: {
        height: '2.375em',
        width: '100%',
        border: '0.0625em solid #949494',
        borderRadius: '0.625em'
      }
    }
  
    optionList = [
      "A+",
      "A-",
      "B+",
      "B-",
      "O+",
      "O-",
      "AB+",
      "AB-"
    ];

  textBtnConfig = {
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

  weightConfig = {
    type: 'number',
    label: 'Weight',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '3',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  bmiConfig = {
    type: 'number',
    label: 'BMI',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '4',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  allergiesConfig = {
    type: 'text',
    label: 'Allergies',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

    bpConfig = {
    type: 'text',
    label: 'Blood pressure',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '7',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  pulseConfig = {
    type: 'text',
    label: 'Pulse',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '3',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  immunizationConfig = {
    type: 'text',
    label: 'Immunization',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '20',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  menus = { '1': ["Dashboard", "/patient-dashboard", 0], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Data", "/medical-data", 1], '4': ["Medications", "/medications", 0], '5': ["Past Records", "/past-records", 0] };

  constructor(
    private medicalDataService: MedicalDataService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.medicalDataService.getMedicalDataByPatientId(this.patientId)
      .subscribe(response => this.medicalData=response)
  }

  medicalDataFormSubmit(){
    if (this.medicalData.isCurrent === undefined)
      this.medicalData.isCurrent='true'
    
    this.medicalData.patientId=this.patientId

    this.medicalData.uploadDate = formatDate(new Date(), 'yyyy-MM-dd', 'en')
    console.log(this.medicalData);
    this.medicalDataService.saveMedicalData(this.medicalData)
      .subscribe(response => this.medicalData = response)
  }

  
}
