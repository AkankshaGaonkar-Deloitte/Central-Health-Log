import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PastRecord } from 'src/app/model/past-record';
import { PastRecordService } from 'src/app/service/past-record.service';

@Component({
  selector: 'app-doc-patient-past-records',
  templateUrl: './doc-patient-past-records.component.html',
  styleUrls: ['./doc-patient-past-records.component.scss']
})
export class DocPatientPastRecordsComponent implements OnInit {

  pastRecord: PastRecord = new PastRecord(-1)

  patientId: number = 43190

  filterSelector: string = 'Date'
  dateFrom: string = ''
  dateTo: string = ''
  severityFrom: number = -1
  severityTo: number = -1
  doctor: number = -1

  allPastRecordsOfAPatient: PastRecord[] = []

  // filter selector block starts
  textDropConfig = {
    styles: {
      background: '#fff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '1.5em',
      textAlign: 'left'
    }
  }

  optionList = [
    "Date",
    "Severity",
    "Doctor"
  ];

  filterSelectEventReceived(selectedFilter: string) {
    console.log(`At parent filter select ${selectedFilter}`);
    this.filterSelector = selectedFilter

  }
  // filter selector block ends

  // search with date starts
  searchWithDateFrom = {
    type: 'date',
    label: 'from',
    placeholder: 'from',
    styling: {
      width: '10em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  searchWithDateTo = {
    type: 'date',
    label: 'from',
    placeholder: 'to',
    styling: {
      width: '10em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  onClickFromDateReceived(fromDate: string | number | null) {
    console.log(`At parent from date ${fromDate}`);
    this.dateFrom = fromDate as string

  }

  onClickToDateReceived(toDate: string | number | null) {
    console.log(`At parent to date ${toDate}`);
    this.dateTo = toDate as string

  }
  // search with date ends

  // search with severity begins
  searchWithSeverityFrom = {
    type: 'number',
    label: 'from',
    placeholder: 'from',
    styling: {
      width: '10em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: '',
      min: '1',
      max: '10'
    },
    patternErrorMessage: ''
  };

  searchWithSeverityTo = {
    type: 'number',
    label: 'to',
    placeholder: 'to',
    styling: {
      width: '10em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: '',
      min: '1',
      max: '10'
    },
    patternErrorMessage: ''
  };

  onClickSeverityFromReceived(fromSeverity: string | number | null) {
    console.log(`At parent severity from ${fromSeverity}`);
    this.severityFrom = fromSeverity as number
  }

  onClickSeverityToReceived(toSeverity: string | number | null) {
    console.log(`At parent severity to ${toSeverity}`);
    this.severityTo = toSeverity as number
  }
  // search with severity ends

  // search with doctor id begins
  searchWithDoctorId = {
    type: 'number',
    label: 'Doctor id',
    placeholder: 'Doctor id',
    styling: {
      width: '10em',
      height: '2.5em',
      background: '#FFFFFF',
      border: '0.0625em solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: '',
      min: '1',
      max: '10'
    },
    patternErrorMessage: ''
  };

  onClickDoctorReceived(doctorid: string | number | null) {
    console.log(`At parent doctorid from ${doctorid}`);
    this.doctor = doctorid as number
  }
  // search with doctor id ends

  // on search button click begins
  searchBtnConfig = {
    type: "submit",
    styles: {
      color: '#fff',
      height: '2em',
      width: '5em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',
      background: '#000000',
      borderRadius: '0.375em'

    }
  };

  search() {
    if (this.filterSelector === 'Date') {
      console.log(`${this.dateFrom} ${this.dateTo}`);
      this.pastRecordService.filterByDate(this.patientId, this.dateFrom, this.dateTo)
        .subscribe(data => this.allPastRecordsOfAPatient = data)

    } else if (this.filterSelector === 'Severity') {
      console.log(`${this.severityFrom} ${this.severityTo}`);
      this.pastRecordService.filterBySeverity(this.patientId, this.severityFrom, this.severityTo)
        .subscribe(data => this.allPastRecordsOfAPatient = data)

    } else if (this.filterSelector === 'Doctor') {
      console.log(this.doctor);
      this.pastRecordService.filterByDoctor(this.patientId, this.doctor)
        .subscribe(data => this.allPastRecordsOfAPatient = data)

    }

  }
  //on search button click ends

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


  menus1 = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 0],'2': ['Medical Data', '/doctor/patient/medical-data', 0],
  '3': ['Medications', '/doctor/patient/medication', 0],'4': ['Past Records', '/doctor/patient/past-records', 1] };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 1],'2':['Doctor Profile','/doctor-profile']}

  constructor(
    private pastRecordService: PastRecordService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pastRecordService.getAllPatientRecords(43190)
      .subscribe(data => this.allPastRecordsOfAPatient = data);

  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  addMedicalRecord(){
    this.router.navigate(['/doctor/patient/add-medical-data'])
  }

} 