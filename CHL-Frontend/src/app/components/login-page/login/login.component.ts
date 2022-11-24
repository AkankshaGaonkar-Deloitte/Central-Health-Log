import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  patientActive: boolean = true;
  doctorActive: boolean = false;
  adminActive: boolean = false;

  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  usernameReceived($event: any) {
    this.LoginForm.patchValue({ 'username': $event });
  }
  pwdReceived($event: any) {
    this.LoginForm.patchValue({ 'password': $event });
  }
  // onSubmit() {
  //   console.warn(this.LoginForm.value);
  // }
  loginPatient(){
    console.warn('patient',this.LoginForm.value);
  }
  loginDoctor(){
    console.warn('doctor',this.LoginForm.value);
  }
  loginAdmin(){
    console.warn('admin',this.LoginForm.value);
  }



  constructor() { }

  ngOnInit(): void {
  }
  onPatientactive() {
    this.patientActive = true;
    this.doctorActive = false;
    this.adminActive = false;
  }
  onDoctoractive() {
    this.patientActive = false;
    this.doctorActive = true;
    this.adminActive = false;
  }
  onAdminactive() {
    this.patientActive = false;
    this.doctorActive = false;
    this.adminActive = true;
  }

  ipConfig = {
    type: 'text',
    label: 'username',
    placeholder: '',
    styling: {
      width: '100%',
      height: '1.8em'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Must be a valid input'
  }


  ipConfig2 = {
    type: 'password',
    label: 'password',
    placeholder: '',
    styling: {
      width: '100%',
      height: '1.8em'
    },
    validations: {
      required: '',
      minLength: '5',
      maxLength: '20',
      pattern: ''
    },
    patternErrorMessage: 'Must be a valid password'
  }

  textBtnConfig = {
    type: 'submit',
    styles: {
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontSize: '1em',
      borderColor: '#fff',
      height: '2em'
    }
  }
}
