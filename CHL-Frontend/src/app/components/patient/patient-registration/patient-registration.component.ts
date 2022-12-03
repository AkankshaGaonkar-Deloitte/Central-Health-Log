import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientRegService } from 'src/app/service/patient/patient-reg.service';
import { Patient } from 'src/app/model/patient';
import { Doctor } from 'src/app/model/doctor';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  ngOnInit(): void {
  }

  patientActive: boolean = true;
  patient = new Patient();

  doctor = new Doctor();
  textBtnConfig = { type: "submit", styles: { backgroundColor: '#1CB5BD', color: '#fff', height: '2em',width:'8em',fontSize:'1.1em' } };

  // onUSerID(){
  //   this.ipConfig.patternErrorMessage
  // }
  ipConfig = {
    type: 'text',
    label: 'firstname',
    placeholder: '',
    styling: {
      width: '17em',
      height: '2em',
      borderRadius: '0.2em'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };
  ipConfig1 = {
    type: 'tel',
    label: 'contact',
    placeholder: '',
    styling: {
      width: '17em',
      height: '2em',
      borderRadius: '0.2em'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };
  ipConfig2 = {
    type: 'password',
    label: 'password',
    placeholder: '',
    styling: {
      width: '17em',
      height: '2em',
      borderRadius: '0.2em'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };
  ipConfig3 = {
    type: 'number',
    label: '',
    placeholder: '',
    styling: {
      width: '17em',
      height: '2em',
      borderRadius: '0.2em'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  constructor(private router: Router, private patientregService: PatientRegService) { }

  RegistrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    userID: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.warn(this.patient);
    return this.patientregService.addPatient(this.patient)
      .subscribe(data => { this.patient = data; 
      console.log(this.patient);
      })
  }

  DocRegistrationForm = new FormGroup({
    doctorName: new FormControl(''),
    aadharNo: new FormControl(''),
    registrationNo: new FormControl(''),
    yearOfReg: new FormControl(''),
    stateCouncil: new FormControl(''),
    qualification: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    userID: new FormControl(''),
    password: new FormControl('')
  });

  onDocSubmit() {
    console.warn(this.DocRegistrationForm.value);
    return this.patientregService.addDoctor(this.doctor)
      .subscribe(data => {
        this.doctor = data;
        console.warn(this.doctor)
      })
  }
  addPatient($event: any) {
    this.patientActive = true;
  }
  addDoctor($event: any) {
    this.patientActive = false;

  }
}
