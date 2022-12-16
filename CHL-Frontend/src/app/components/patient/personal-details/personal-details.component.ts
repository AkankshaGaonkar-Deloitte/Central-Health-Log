import { PatientService } from './../../../service/patient/patient.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { MedicalData } from 'src/app/model/medical-data';
import { MedicalDataService } from 'src/app/service/medical-data/medical-data.service';
import { Patient } from 'src/app/model/patient';
import { PatientDetailsService } from 'src/app/service/patient-details/patient-details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  patientId!: number;
  patient: Patient = new Patient()

  genderDropConfig = {
      styles: {
        height: '2.375em',
        width: '100%',
        border: '0.0625em solid #949494',
        borderRadius: '0.625em'
      }
    }
  
    optionList = [
      "Male",
      "Female",
      "Other"
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

  contactNoConfig = {
    type: 'number',
    label: 'Contact no',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  fNameConfig = {
    type: 'text',
    label: 'First name',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '10',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  lNameConfig = {
    type: 'text',
    label: 'Last name',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '10',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  ageConfig = {
    type: 'number',
    label: 'Age',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  emailConfig = {
    type: 'email',
    label: 'Email',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '4',
      maxLength: '20',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  menus = { '1': ["Dashboard", "/patient-dashboard", 0], '2': ["Personal Details", "/personal-details", 1], '3': ["Medical Data", "/medical-data", 0], '4': ["Medications", "/medications", 0], '5': ["Past Records", "/past-records", 0] };
  Userid!: string;

  constructor(
    private patientDetailsService: PatientDetailsService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('user-id')
    this.patientId=Number(id)
    this.patientDetailsService.getPatientByPatientId(this.patientId)
      .subscribe(response => {       
        this.patient=response
      })
  }


  personalDetailsFormSubmit(){
    this.patientDetailsService.savePatientDetails(this.patient)
      .subscribe(response => this.patient = response)
  }
}
