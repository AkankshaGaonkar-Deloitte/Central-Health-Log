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
  patientActive:boolean=true;

  patient=new Patient();
 
  doctor=new Doctor();
textBtnConfig={ type: "submit", styles: {backgroundColor:'#1CB5BD',color:'#fff',height:'2em' } };

ipConfig = {
  type: 'text',
  label: 'firstname',
  placeholder:'',
  styling: {  
    width: '12em',
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

  constructor(private router: Router,private patientregService: PatientRegService ) { }
  
  

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
    this.patient.firstname=String(this.RegistrationForm.value.firstName);
  }

  lastNameReceived($event:any) {
    this.RegistrationForm.patchValue({'lastName':$event})
    this.patient.lastname=String(this.RegistrationForm.value.lastName);
  }
  emailReceived($event:any){
    this.RegistrationForm.patchValue({'email':$event})
    this.patient.email=String(this.RegistrationForm.value.email);
  }
  contactReceived($event:any){
    this.RegistrationForm.patchValue({'contact':$event})
    this.patient.phoneNo=Number(this.RegistrationForm.value.contact);
  }
  genderReceived($event:any){
    this.RegistrationForm.patchValue({'gender':$event})
    this.patient.gender=String(this.RegistrationForm.value.gender);
  }
  ageReceived($event:any){
    this.RegistrationForm.patchValue({'age':$event})
    this.patient.age=Number(this.RegistrationForm.value.age);
  }
  useridReceived($event:any){
    this.RegistrationForm.patchValue({'userID':$event})
    this.patient.username=String(this.RegistrationForm.value.userID);
  }
  pwdReceived($event:any){
    this.RegistrationForm.patchValue({'password':$event})
    this.patient.password=String(this.RegistrationForm.value.password);

  }
  onSubmit() {
    console.warn(this.RegistrationForm.value,this.patient);
    return this.patientregService.addPatient(this.patient)
      .subscribe(data =>
        {this.patient=data;
        console.log(this.patient)
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

  docNameReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.doctorname=String(this.DocRegistrationForm.value.doctorName);

  } 
  aadharReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.aadharNo=String(this.DocRegistrationForm.value.aadharNo);

  }
  regNoReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.regNo=String(this.DocRegistrationForm.value.registrationNo);

  } 
  yearReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.yearofReg=Number(this.DocRegistrationForm.value.yearOfReg);

  } 
  councilReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.stateMedCouncil=String(this.DocRegistrationForm.value.stateCouncil);

  } qualReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.qualification=String(this.DocRegistrationForm.value.qualification);

  } docIdReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.username=String(this.DocRegistrationForm.value.userID);

  } docPwdReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.password=String(this.DocRegistrationForm.value.password);

  } docEmailReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.email=String(this.DocRegistrationForm.value.email);

  } docContactReceived($event:any){
    this.DocRegistrationForm.patchValue({'password':$event})
    this.doctor.phoneNo=Number(this.DocRegistrationForm.value.contact);

  }
  onDocSubmit() {
    console.warn(this.DocRegistrationForm.value);
    return this.patientregService.addDoctor(this.doctor)
      .subscribe(data =>
        {this.doctor=data;
        console.log(this.doctor)
      })
  }
  addPatient($event:any){
    this.patientActive=true;
  }
  addDoctor($event:any){
    this.patientActive=false;

  }
}
