import { Component, OnInit } from '@angular/core';
import { PastRecord } from 'src/app/model/past-record';
import { Medication } from 'src/app/model/patient/medication';
import { MedicationService } from 'src/app/service/medication/medication.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {

  pastRecord: PastRecord = new PastRecord(-1)
  medicationData: Medication = new Medication(-1)

  patientId!: number;
  filterSelector: string = 'Date'
  dateFrom: string = ''
  dateTo: string = ''
  severityFrom: number = -1
  severityTo: number = -1
  doctor: number = -1

  allMedicalDataOfAPatient: Medication[] = []

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

  menus = { '1': ["Dashboard", "/patient-dashboard", 0], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Data", "/medical-data", 0], '4': ["Medications", "/medications", 1], '5': ["Past Records", "/past-records", 0] };

  constructor(private medicationService: MedicationService) {  
   }
  Userid!: string;

  ngOnInit(): void {
    let id=sessionStorage.getItem(this.Userid)
    this.patientId=Number(id)
    this.medicationService.getAllPatientRecords(Number(id))
      .subscribe(response => {
        this.allMedicalDataOfAPatient = response
  
      }
    )

  }

  removeOrDeleteMedication(id?: number){
    this.medicationService.removeOrDeleteMedication(id)
      .subscribe(
        response => {
          this.medicationService.getAllPatientRecords(Number(this.patientId))
            .subscribe(data => this.allMedicalDataOfAPatient = data)
        }
      ) }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  submitNewMedication(){
    this.medicationData.isCurrent=true
    this.medicationData.patientId=this.patientId
    this.medicationService.addMedication(this.medicationData)
      .subscribe(data => {
        this.allMedicalDataOfAPatient.push(data)
      })
    this.closePopup()
  }

}
