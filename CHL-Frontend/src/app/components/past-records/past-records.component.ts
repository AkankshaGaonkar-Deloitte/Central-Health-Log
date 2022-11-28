import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-records',
  templateUrl: './past-records.component.html',
  styleUrls: ['./past-records.component.scss']
})
export class PastRecordsComponent implements OnInit {

  filterSelector: string = 'Date'

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
    "Severity"
  ];

  filterSelectEventReceived(selectedFilter: string){
    console.log(`At parent filter select ${selectedFilter}`);
    this.filterSelector = selectedFilter
    
  }
  // filter selector block ends

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

  textBtnConfig3 = {
    type: "submit",
    styles: {
      color: '#fff',
      height: '2em',
      width: '2em',
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

  searchConfig1 = {
    type: 'search',
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

  searchConfig2 = {
    type: 'search',
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


  // textDropConfig = {
  //   styles: {
  //     background: '#fff',
  //     color: '#1CB5BD',
  //     height: '2em',
  //     width: '8em',
  //     fontFamily: 'Montserrat',
  //     fontStyle: 'normal',
  //     fontWeight: '500',
  //     fontSize: '1.25em',
  //     lineHeight: '1.5em',
  //     textAlign: 'center',
  //     border: '0.0625 solid #1CB5BD',
  //     borderRadius: '0.25em',
  //   }
  // }

  // optionList = [
  //   "Dr. Prasad",
  //   "Dr. Amit",
  //   "Dr. Tashmeet"
  // ];

  onClickEventReceived($event: string | number | null) {
    console.log(`At parent ${$event}`);
  }

  menus = { '1': ["Dashboard", "/patient-dashboard", 1], '2': ["Personal Details", "/personal-details", 0], '3': ["Medical Data", "/medical-data", 0], '4': ["Medications", "/medications", 0], '5': ["Past Records", "/past-records", 0] };

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
