import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientRegService } from 'src/app/service/patient/patient-reg.service';
import { Patient } from 'src/app/model/patient';
import { Doctor } from 'src/app/model/doctor';
import { Admin } from 'src/app/model/Admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private patientregService: PatientRegService) { }

  userName!: string | number | null;
  password!: string | number | null;

  patientActive: boolean = true;
  doctorActive: boolean = false;
  adminActive: boolean = false;

  wrongPass: boolean = false

  btndisable: boolean = true;
  usernameExists: boolean = true;
  user = new Patient();

  docbtndisable: boolean = true;
  docusernameExists: boolean = true;
  docUser = new Doctor()

  adminbtndisable: boolean = true;
  adminUsernameExists: boolean = true;
  adminUser = new Admin()

  onUser() {
    if (this.patientActive) {
      this.patientregService.IfUsernameExists(
        String(this.userName)).subscribe(data => {
          this.user = data as Patient

          if (this.user) {
            this.usernameExists = true;
            this.btndisable = false;
          }
          else {
            this.usernameExists = false;
            if (this.user == null)
              this.btndisable = true
          }
        })
    }

    else {
      if (this.doctorActive) {
        this.patientregService.IfDocUsernameExists(
          String(this.userName)).subscribe(data => {
            this.docUser = data as Doctor

            if (this.docUser) {
              this.docusernameExists = true;
              this.docbtndisable = false;
            }
            else {
              this.docusernameExists = false;
              if (this.docUser == null)
                this.docbtndisable = true
            }
          })
      }
      else {
        if (this.adminActive) {
          this.patientregService.IfAdminUsernameExists(
            String(this.userName)).subscribe(data => {
              this.adminUser = data as Admin

              if (this.adminUser) {
                this.adminUsernameExists = true;
                this.adminbtndisable = false;
              }
              else {
                this.adminUsernameExists = false;
                if (this.adminUser == null)
                  this.adminbtndisable = true
              }
            })
        }
      }
    }
  }

  loginPatient() {
    if (this.user.password == this.password) {
      this.wrongPass = false
      sessionStorage.setItem('user-id', String(this.user.id));
      sessionStorage.setItem('Patient-name', String(this.user.firstname)+" "+String(this.user.lastname));
      this.router.navigate(['/patient-dashboard'])
    }
    else {
      this.wrongPass = true
    }
  }
  loginDoctor() {
    if (this.docUser.password == this.password) {
      this.wrongPass = false
      sessionStorage.setItem('user-id', String(this.docUser.id));
      sessionStorage.setItem('Doctor-name', String(this.docUser.doctorName));
      this.router.navigate(['/doctor-dashboard'])
    }
    else {
      this.wrongPass = true
    }

  }
  loginAdmin() {
    if (this.adminUser.password == this.password) {
      this.wrongPass = false
      sessionStorage.setItem('user-id', String(this.adminUser.id));
      sessionStorage.setItem('Admin-name', String(this.adminUser.name));
      this.router.navigate(['/to-be-registered'])
    }
    else {
      this.wrongPass = true
    }
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
