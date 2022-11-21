import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-records',
  templateUrl: './past-records.component.html',
  styleUrls: ['./past-records.component.scss']
})
export class PastRecordsComponent implements OnInit {

  textBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#1CB5BD',
      height: '40px',
      width: '170px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      textAlign: 'center',

    }
  };

  textBtnConfig2 = {
    type: "submit",
    styles: {
      background: '#1CB5BD',
      color: '#fff',
      height: '40px',
      width: '170px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      textAlign: 'center',

    }
  };

  textBtnConfig3 = {
    type: "submit",
    styles: {
      color: '#fff',
      height: '40px',
      width: '40px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      textAlign: 'center',

      background: '#000000',
      borderRadius: '6px'

    }
  };

  ipConfig = {
    type: 'search',
    label: 'from',
    placeholder: 'from',
    styling: {
      width: '197px',
      height: '40px',
      background: '#FFFFFF',
      border: '1px solid #949494',
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

  ipConfig2 = {
    type: 'search',
    label: 'from',
    placeholder: 'to',
    styling: {
      width: '197px',
      height: '40px',
      background: '#FFFFFF',
      border: '1px solid #949494',
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

  tabs={'1':["Dashboard","/patient-dashboard"],'2':["Patient Details","/patient-details"],'3':["Past Records","/past-records"]};
  
  onClickEventReceived($event: string | number | null) {
    console.log(`At parent ${$event}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}