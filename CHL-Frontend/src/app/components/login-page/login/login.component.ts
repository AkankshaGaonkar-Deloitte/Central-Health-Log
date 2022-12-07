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
  constructor(private router: Router, private patientregService: PatientRegService) { }

  patientActive: boolean = true;
  doctorActive: boolean = false;
  adminActive: boolean = false;

  btndisable: boolean=true;
  usernameExists: boolean = true;
  wrongPass:boolean=false
  // onSubmit() {
  //   console.warn(this.LoginForm.value);
  // }

  userName!: string | number | null;
  password!: string | number | null;
  user = new Patient();

  onUserPatient() {
    this.patientregService.IfUsernameExists(
      String(this.userName)).subscribe(data => {
        this.user = data as Patient
        console.warn(this.user)
        if (this.user) {this.usernameExists=true;
          this.btndisable = false;
        }
        else {this.usernameExists=false;
          if (this.user == null)
            this.btndisable = true
        }
      })


  }
  Userid!: string;
  loginPatient() {
    if (this.user.password == this.password) {
      this.router.navigate(['/patient-dashboard'])
    }
    else {
      this.wrongPass=true
    }
    sessionStorage.setItem(this.Userid, String(this.user.id)) ;
    let id = sessionStorage.getItem(this.Userid);
    console.warn(Number(id));

  }

  loginDoctor() {
    this.router.navigate(['/doctor/patient/medical-data'])
  }
  loginAdmin() {
    console.warn('admin');
  }

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
      borderRadius: '0.35em'
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
      borderRadius: '0.35em'
    },
    validations: {
      required: '',
      minLength: '3',
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
      width: '8em'
    }
  }
}
