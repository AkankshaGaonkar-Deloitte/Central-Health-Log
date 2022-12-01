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
  patient=new Patient();
  fname !: string;
  constructor(public patientservice:PatientService) { }

  modalForm!: FormGroup;
  testInp : string  = 'test';

  ngOnInit(): void {
    this.getPatientById();
    console.log("patient value is " + this.patient.firstname)
    this.modalForm = new FormGroup({
      fn: new FormControl(
        
        { value: 'something', disabled: false }
      )
    });
    console.log("value is : " + this.modalForm.get("fn")?.get("value"));
  }

  PersonalDetails = new FormGroup({
    id : new FormControl(''),
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
    this.patient.firstname = String (this.PersonalDetails.value.firstName);
  }
  emailReceived($event: any) {
    this.PersonalDetails.patchValue({ email: $event });
    this.patient.email = String (this.PersonalDetails.value.email);
  }
  genderReceived($event: any) {
    this.PersonalDetails.patchValue({ gender: $event });
    this.patient.gender = String (this.PersonalDetails.value.gender);
  }
  lastNameReceived($event: any) {
    this.PersonalDetails.patchValue({ lastName: $event });
    this.patient.lastname = String (this.PersonalDetails.value.lastName);
  }
  contactNoReceived($event: any) {
    this.PersonalDetails.patchValue({ contact: $event });
    this.patient.phoneNo = Number (this.PersonalDetails.value.contact);
  }
  ageReceived($event: any) {
    this.PersonalDetails.patchValue({ age: $event });
    this.patient.age = Number (this.PersonalDetails.value.age);
  }
  addressReceived($event: any) {
    this.PersonalDetails.patchValue({ address: $event });
    this.patient.address = String (this.PersonalDetails.value.address);
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
    // return this.patientservice.
    this.PersonalDetails.value.id = '1';
    // console.log(this.PersonalDetails.value.id + "id is ");
    this.patient.id = Number(this.PersonalDetails.value.id);
    this.patient.firstname != this.PersonalDetails.value.firstName;
    console.log(this.patient.firstname +"hi nawaz");
    return this.patientservice.updatePatientDetails(this.patient).subscribe(data => {
      this.patient = data;
      
    });
  }

  getPatientById() {
     return this.patientservice.getPatientDetailsById(1).subscribe(data => {
      this.patient = data;
    });
    
  }
}
