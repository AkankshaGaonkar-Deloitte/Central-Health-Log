import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientRegService } from 'src/app/service/patient/patient-reg.service';
import { Patient } from 'src/app/model/patient';
import { Doctor } from 'src/app/model/doctor';
import { OtpService } from 'src/app/service/otp.service';
import { SMSPojo } from 'src/app/model/SMSPojo';
import { TempOTP } from 'src/app/model/TempOTP';
import { PostResponse } from 'src/app/model/post-response';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  [x: string]: any;
  errors: any;
  constructor(private router: Router, private patientregService: PatientRegService
    , private otpService: OtpService) { }

  usernameExists: boolean = false;
  contactExists: boolean = false;

  ngOnInit(): void {
  }

  patientActive: boolean = true;

  patient = new Patient();
  doctor = new Doctor();

  textBtnConfig = {
    type: "submit", styles: {
      backgroundColor: '#1CB5BD',
      color: '#fff', height: '2em', width: '8em', fontSize: '1.1em'
    }
  };

  onUserID() {
    let user: Object;
    if (this.patientActive) {
      this.patientregService.IfUsernameExists(
        String(this.patient.username)).subscribe(data => {
          user = data
          if (user) {
            this.usernameExists = true
            this.btndisable = true
          }
          else {
            if (user == null)
              this.usernameExists = false
            if (!this.contactExists) { this.btndisable = false }
          }
        })
    }
    else {
      this.patientregService.IfDocUsernameExists(
        String(this.doctor.username)).subscribe(data => {
          user = data
          if (user) {
            this.usernameExists = true
            this.btndisable = true
          }
          else {
            if (user == null)
              this.usernameExists = false
            if (!this.contactExists) { this.btndisable = false }
          }
        })
    }
  }
  onPhoneNo() {
    let user: Object;
    if (this.patientActive) {
      this.patientregService.IfContactExists(
        Number(this.patient.phoneNo)).subscribe(data => {
          user = data
          if (user) {
            this.contactExists = true;
            this.btndisable = true
          }
          else {
            if (user == null)
              this.contactExists = false;
            if (!this.usernameExists) { this.btndisable = false }
          }
        })
    }
    else {
      this.patientregService.IfDocContactExists(
        Number(this.doctor.phoneNo)).subscribe(data => {
          user = data
          if (user) {
            this.contactExists = true;
            this.btndisable = true
          }
          else {
            if (user == null)
              this.contactExists = false;
            if (!this.usernameExists) { this.btndisable = false }
          }
        })
    }
  }
  msg: string = ''

  btndisable!: boolean;
  otp!: string | number | null;
  response: PostResponse = new PostResponse('')

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
    if (this.patientActive) {
      return this.otpService.sendOtp(new SMSPojo('+91' + this.patient.phoneNo as string))
        .subscribe(data => {
          this.response = data
          console.log(this.response.responseMessage);
        }
        );
    }
    else {
      return this.otpService.sendOtp(new SMSPojo('+91' + this.doctor.phoneNo as string))
        .subscribe(data => {
          this.response = data
          console.log(this.response.responseMessage);
        }
        );
    }
  }

  closePopup() {
    this.displayStyle = "none";
    window.location.reload();
  }

  verified: boolean = false;
  invalid: boolean = false;

  Verifyotp() {
    if (this.patientActive) {
      return this.otpService.VerifyOtp(new TempOTP(String('+91' + this.patient.phoneNo), Number(this.otp)))
        .subscribe(
          data => {
            if (data.responseMessage == "OTP verified!") {
              this.patientregService.addPatient(this.patient)
                .subscribe(data => {
                  this.patient = data;
                })
              this.verified = true
            }
            else {
              this.invalid = true;
            }
          })
    }
    else {
      return this.otpService.VerifyOtp(new TempOTP(String('+91' + this.doctor.phoneNo), Number(this.otp)))
        .subscribe(
          data => {
            if (data.responseMessage == "OTP verified!") {
              this.patientregService.addDoctor(this.doctor)
              .subscribe(data => {
                this.doctor = data;
                })
              this.verified = true
            }
            else {
              this.invalid = true;
            }
          })
    }
  }

optionList = [
  "Female",
  "Male",
  "Other"
];
optionList1 = [
  "Andhra Pradesh Medical Council	",
  "Arunachal Pradesh Medical Council",
  "Assam Medical Council",
  "Bihar Medical Council",
  "Chattisgarh Medical Council", "Delhi Medical Council",
  "Goa Medical Council",
  "Gujarat Medical Council",
  "Haryana State Dental & Medical Council",
  "Himachal Pradesh Medical Council",
  "Jammu & Kashmir Medical Council",
  "Jharkhand Medical Council",
  "Karnataka Medical Council",
  "Kerala Medical Council",
  "Madhya Pradesh Medical Council",
  "Maharashtra Medical Council",
  "Manipur Medical Council",
  "Meghalya Medical Council", "Mizoram Medical Council", "Nagaland Medical Council",
  "Orissa Medical Council",
  "Punjab Medical Council",
  "Rajasthan Medical Council",
  "Sikkim Medical Council",
  "Tamil Nadu Medical Council",
  "Telangana Medical Council",
  "Tripura Medical Council",
  "Uttarnchal Medical Council",
  "Uttar Pradesh Medical Council",
  "West Bengal Medical Council"

];
ipConfig = {
  type: 'text',
  label: '',
  placeholder: '',
  styling: {
    width: '16em',
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
  label: '',
  placeholder: '',
  styling: {
    width: '16em',
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
    width: '16em',
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
    width: '16em',
    height: '2em',
    borderRadius: '0.2em',
  },
  validations: {
    required: '',
    minLength: '',
    maxLength: '',
    pattern: ''
  },
  patternErrorMessage: ''
};



textDropConfig = {
  styles: {
    height: '2em',
    width: '16em',
    borderRadius: '0.2em',
    border: '0.025em solid #949494'
  }
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
