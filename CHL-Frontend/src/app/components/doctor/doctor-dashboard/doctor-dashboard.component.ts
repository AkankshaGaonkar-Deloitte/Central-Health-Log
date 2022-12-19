import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PostResponse } from 'src/app/model/post-response';
import { SMSPojo } from 'src/app/model/SMSPojo';
import { TempOTP } from 'src/app/model/TempOTP';
import { OtpService } from 'src/app/service/otp.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
  patient = new Patient()
  patientId!: string | number | null;
  response: PostResponse = new PostResponse('')
  doctorId!: number;
  doctorName!: string;

  constructor(private patientService: PatientService, private otpService: OtpService,private router:Router) { }
  displayStyle = "none";

  GetPatient() {
    this.patientService.getPatientDetailsById(this.patientId as number).subscribe(data => {
      this.patient = data;
      if (this.patient) {
        this.displayStyle = "block";
        this.otpService.sendOtp(new SMSPojo('+91' + this.patient.phoneNo as string)).subscribe(data => {
          this.response = data
          console.log(this.response.responseMessage);
        })
      }
    });

  }
  otp!: string | number | null;
  textBtnConfig = {
    type: "submit", styles: {
      backgroundColor: '#1CB5BD',
      color: '#fff', height: '2em', width: '8em', fontSize: '1.1em'
    }
  };
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

  closePopup() {
    this.displayStyle = "none";
  }


  Verifyotp() {
    return this.otpService.VerifyOtp(new TempOTP(String('+91'+this.patient.phoneNo), Number(this.otp)))
      .subscribe(
        data => {
          console.log(data);
          if (data.responseMessage=="OTP verified!"){
            this.router.navigate(['/doc-patient-dashboard'])
          }
          else{
            console.log(data.responseMessage);
            
          }
        }
      )
  }
  
  menus1 = {
    '1': ['Patient Dashboard', '/doc-patient-dashboard', 0], '2': ['Medical Data', '/doctor/patient/medical-data', 1],
    '3': ['Medications', '/doctor/patient/medication', 0], '4': ['Past Records', '/doctor/patient/past-records', 0]
  };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 1], '2': ['Doctor Profile', '/doctor-profile'] }
  
  ngOnInit(): void {
    this.doctorName='Dr '+String(sessionStorage.getItem('Doctor-name'))
    let id=sessionStorage.getItem('doc-user-id')
    console.warn(id);
    
    this.doctorId=Number(id)
    
  }

  searchPatientId = {
    type: 'text',
    label: 'to',
    placeholder: 'patient id',
    styling: {
      width: '18em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0.25em'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: '',
      min: '6',
      max: '10'
    },
    patternErrorMessage: ''
  };


}
