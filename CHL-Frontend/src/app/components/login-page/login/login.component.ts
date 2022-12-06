import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientRegService } from 'src/app/service/patient/patient-reg.service';
import { Patient } from 'src/app/model/patient';

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
  btndisable!: boolean;
  usernameExists: boolean=false;
  usernameReceived($event: any) {
    this.LoginForm.patchValue({ 'username': $event });
  }
  pwdReceived($event: any) {
    this.LoginForm.patchValue({ 'password': $event });
  }
  // onSubmit() {
  //   console.warn(this.LoginForm.value);
  // }
  user=Patient
  userName!: string | number | null;
  password!: string | number | null;
  loginPatient(){
    console.warn('patient',this.LoginForm.value);
    // let user: Patient;
    this.patientregService.IfUsernameExists(
      String(this.userName)).subscribe(data => {
        // this.user = data
        console.warn(this.user)
        if (this.user) { this.usernameExists = true ;
          this.btndisable=false;
    
         }
        else {
          if (this.user == null)
            this.usernameExists = false
          this.btndisable=true
        }
      })
    this.router.navigate(['/patient-dashboard'])
    
  }
  loginDoctor(){
    console.warn('doctor',this.LoginForm.value);
  }
  loginAdmin(){
    console.warn('admin',this.LoginForm.value);
  }



  constructor(private router:Router,private patientregService:PatientRegService ) { }

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
      height: '2em',
      borderRadius:'0.35em'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Please enter a valid username'
  }


  ipConfig2 = {
    type: 'password',
    label: 'password',
    placeholder: '',
    styling: {
      width: '100%',
      height: '2em',
      borderRadius:'0.35em'
    },
    validations: {
      required: '',
      minLength: '5',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Enter a valid password'
  }

  textBtnConfig = {
    type: 'submit',
    styles: {
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontSize: '1.2em',
      borderColor: '#fff',
      height: '2.5em',
      width:'8em'
    }
  }
}
