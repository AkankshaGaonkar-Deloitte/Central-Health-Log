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

  ipConfig = {
    type: 'search',
    label: 'from',
    styling: {
      width: '197px',
      height: '40px',
      background: '#FFFFFF',
      border: '1px solid #949494',
      borderRadius: '0'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Invalid ph no'
  };

  onClickEventReceived($event: string | number | null) {
    console.log(`At parent ${$event}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
