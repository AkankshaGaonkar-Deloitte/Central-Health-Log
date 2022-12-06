import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-patient-medication',
  templateUrl: './doc-patient-medication.component.html',
  styleUrls: ['./doc-patient-medication.component.scss']
})
export class DocPatientMedicationComponent implements OnInit {

  // pastRecord: PastRecord = new PastRecord(-1)
  // medicationData: Medication = new Medication(-1)

  patientId: number = 43190
  filterSelector: string = 'Date'
  dateFrom: string = ''
  dateTo: string = ''
  severityFrom: number = -1
  severityTo: number = -1
  doctor: number = -1

  // allMedicalDataOfAPatient: Medication[] = []

  textBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#1CB5BD',
      height: '2em',
      width: '8em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center'
    }
  };

  textBtnConfig2 = {
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
      textAlign: 'center'
    }
  };

  deleteBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#737373',
      border: '1px solid #737373',
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

  dateConfig = {
    type: 'date',
    label: 'Date',
    placeholder: '',
    styling: {
      width: '12.5em',
      height: '2.5em'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  idConfig = {
    type: 'number',
    label: 'ID',
    placeholder: '',
    styling: {
      width: '12.5em',
      height: '2.5em'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  nameConfig = {
    type: 'text',
    label: 'Name',
    placeholder: '',
    styling: {
      width: '12.5em',
      height: '2.5em'
    },
    validations: {
      required: '',
      minLength: '4',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  diagnosisConfig = {
    type: 'text',
    label: 'Diagnosis',
    placeholder: '',
    styling: {
      width: '12.5em',
      height: '2.5em'
    },
    validations: {
      required: '',
      minLength: '4',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  presscriptionConfig = {
    type: 'file',
    label: 'Description',
    placeholder: '',
    styling: {
      width: '12.5em',
      height: '2.5em'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 0],'2': ['Medical Data', '/doc-patient-medical-data', 0],
  '3': ['Medications', '/doc-patient-medication', 1],'4': ['Past Records', '/doc-patient-past-records', 0] };
  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}


  constructor() { }

  ngOnInit(): void {}
  //   this.medicationService.getAllPatientRecords(this.patientId)
  //     .subscribe(response => {
  //       this.allMedicalDataOfAPatient = response
  //       console.log(this.allMedicalDataOfAPatient);
        
  //     }
  //   )}

  // removeOrDeleteMedication(id?: number){
  //   this.medicationService.removeOrDeleteMedication(id)
  //     .subscribe(
  //       response => {
  //         this.medicationService.getAllPatientRecords(this.patientId)
  //           .subscribe(data => this.allMedicalDataOfAPatient = data)
  //       }
  //     ) }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  // submitNewMedication(){
  //   this.medicationData.isCurrent=true
  //   this.medicationData.patientId=this.patientId
  //   this.medicationService.addMedication(this.medicationData)
  //     .subscribe(data => {
  //       console.log(`Newly added data ${data}`);
  //       this.allMedicalDataOfAPatient.push(data)
  //     })
  //   this.closePopup()
  //}

}