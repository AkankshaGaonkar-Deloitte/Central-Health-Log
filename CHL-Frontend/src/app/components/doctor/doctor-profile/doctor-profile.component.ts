import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  patientId:number = 43190
  // patient: Patient = new Patient()

  genderDropConfig = {
      styles: {
        height: '2.375em',
        width: '100%',
        border: '0.0625em solid #949494',
        borderRadius: '0.625em'
      }
    }
  
    optionList = [
      "Male",
      "Female",
      "Other"
    ];

    optionList2 = [
      "Orthpaedic",
      "Neurologist",
      "Gynecologist",
      "Dermatologist",
      "Chiropractor",
      "Allergist",
      "Cardiologist",
      "Dentist",
      "Ophthalmologist",
      "Pediatrician",
      "Podiatrist",
      "Anesthesiologist",
      "Obstetrician",
      "Oncologist",
      "Psychiatrist",
      "Radiologist",
      "Other"
    ];


  textBtnConfig = {
    type: "submit",
    styles: {
      background: '#1CB5BD',
      color: '#fff',
      height: '2em',
      width: '8em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',

    }
  };

  contactNoConfig = {
    type: 'number',
    label: 'Contact no',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  fNameConfig = {
    type: 'text',
    label: 'First name',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '10',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  lNameConfig = {
    type: 'text',
    label: 'Last name',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '10',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  ageConfig = {
    type: 'number',
    label: 'Age',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  emailConfig = {
    type: 'email',
    label: 'Email',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '4',
      maxLength: '20',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 0],'2':['Doctor Profile','/doctor-profile',1]}
  doctorId!: number;
  doctorName!: string;

  constructor(
    // private patientDetailsService: PatientDetailsService,
    // private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.doctorName='Dr '+String(sessionStorage.getItem('Doctor-name'))
    let id=sessionStorage.getItem('user-id')
    this.doctorId=Number(id)
    
    // this.patientDetailsService.getPatientByPatientId(this.patientId)
    //   .subscribe(response => {
    //     console.log(response);        
    //     this.patient=response
    //   })
  }

  // personalDetailsFormSubmit(){
  //   console.log(this.patient);
  //   this.patientDetailsService.savePatientDetails(this.patient)
  //     .subscribe(response => this.patient = response)
  // }
}
  