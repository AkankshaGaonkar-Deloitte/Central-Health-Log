import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  patientActive:boolean=true;

textBtnConfig={ type: "submit", styles: {backgroundColor:'#1CB5BD',color:'#fff',height:'2em' } };

ipConfig = {
  type: 'text',
  label: 'firstname',
  placeholder:'',
  styling: {  
    width: '10em',
    height: '1.6em'
  },
  validations : {
    required: '',
    minLength: '3',
    maxLength: '',
    pattern: ''
  },
  patternErrorMessage: ''
};

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

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
  firstNameReceived($event:any){
    this.RegistrationForm.patchValue({'firstName':$event})
  }

  lastNameReceived($event:any) {
    this.RegistrationForm.patchValue({'lastName':$event})
  }
  emailReceived($event:any){
    this.RegistrationForm.patchValue({'email':$event})
  }
  contactReceived($event:any){
    this.RegistrationForm.patchValue({'contact':$event})
  }
  genderReceived($event:any){
    this.RegistrationForm.patchValue({'gender':$event})
  }
  ageReceived($event:any){
    this.RegistrationForm.patchValue({'age':$event})
  }
  useridReceived($event:any){
    this.RegistrationForm.patchValue({'userID':$event})
  }
  pwdReceived($event:any){
    this.RegistrationForm.patchValue({'password':$event})

  }
  onSubmit() {
    console.warn(this.RegistrationForm.value);
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

  docNameReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } 
  aadharReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  }
  regNoReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } 
  yearReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } 
  councilReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } qualReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } docIdReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } docPwdReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } docEmailReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  } docContactReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})

  }
  onDocSubmit() {
    console.warn(this.DocRegistrationForm.value);
  }
  addPatient($event:any){
    this.patientActive=true;
  }
  addDoctor($event:any){
    this.patientActive=false;

  }
}
