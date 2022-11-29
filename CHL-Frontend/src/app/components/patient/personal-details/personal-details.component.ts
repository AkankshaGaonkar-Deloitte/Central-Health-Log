import { PatientService } from './../../../service/patient/patient.service';
import { Patient } from './../../../model/patient/patient';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  menus = {
    '1': ['Dashboard', '/patient-dashboard', 0],
    '2': ['Personal Details', '/personal-details', 1],
    '3': ['Medical Data', '/medical-data', 0],
    '4': ['Medications', '/medications', 0],
    '5': ['Past Records', '/past-records', 0],
  };

  // patient!: Patient;
  patient=new Patient();

  @Input('btntext') btntext: string = 'Login';
  constructor(public patientservice:PatientService) {

  }

  ngOnInit(): void {
    this.getPatientById();
  }
  PersonalDetails = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
  });

  firstNameReceived($event: any) {
    this.PersonalDetails.patchValue({ firstName: $event });
  }
  emailReceived($event: any) {
    this.PersonalDetails.patchValue({ email: $event });
  }
  genderReceived($event: any) {
    this.PersonalDetails.patchValue({ gender: $event });
  }
  lastNameReceived($event: any) {
    this.PersonalDetails.patchValue({ lastName: $event });
  }
  contactNoReceived($event: any) {
    this.PersonalDetails.patchValue({ contact: $event });
  }
  ageReceived($event: any) {
    this.PersonalDetails.patchValue({ age: $event });
  }
  addressReceived($event: any) {
    this.PersonalDetails.patchValue({ address: $event });
  }

  ipConfig1 = {
    type: 'text',
    label: 'firstname',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig2 = {
    type: 'text',
    label: 'email',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig3 = {
    type: 'text',
    label: 'gender',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig4 = {
    type: 'text',
    label: 'lastname',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig5 = {
    type: 'text',
    label: 'contactno',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '10',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig6 = {
    type: 'text',
    label: 'age',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig7 = {
    type: 'text',
    label: 'address',
    placeholder: '',
    styling: {
      width: '900px',
      height: '100px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  textBtnConfig = {
    styles: {
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      width: '150px',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
    },
    type: 'submit',
  };
  onupdate() {
    console.log(this.PersonalDetails.value);
    return this.patientservice
  }

  getPatientById(){
     return this.patientservice.getPatientDetailsById(1).subscribe(data => {
      this.patient = data;
    });
    
  }
}
