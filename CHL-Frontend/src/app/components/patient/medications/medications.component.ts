import { Component, OnInit } from '@angular/core';
import { PastRecord } from 'src/app/model/past-record';
import { Medication } from 'src/app/model/patient/medication';
import { MedicationService } from 'src/app/service/medication/medication.service';
import { PastRecordService } from 'src/app/service/past-record.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {

  pastRecord: PastRecord = new PastRecord(-1)
  medicationData: Medication = new Medication(-1)

  patientId: number = 43190

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
      textAlign: 'center',

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
  

  menus = { '1': ["Dashboard", "/patient-dashboard", 0], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Data", "/medical-data", 1], '4': ["Medications", "/medications", 0], '5': ["Past Records", "/past-records", 0] };

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medicationService.getAllPatientRecords(this.patientId)
      .subscribe(response => {
        console.log('medication component ts ' + response.keys);
        
        this.allMedicalDataOfAPatient = response}
        )
    
  }

  displayStyle = "none";

}
