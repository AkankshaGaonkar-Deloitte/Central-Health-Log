import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ipConfig = {
    type: 'text',
    label: 'username',
    styling: {  
      width: '200px',
      height: '40px'
    },
    validations : {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }

  ipConfig2 = {
    type: 'password',
    label: 'password',
    styling: {  
      width: '200px',
      height: '40px'
    },
    validations : {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern:''
    },
    patternErrorMessage: ''
  };
  



  @Input('btntext') btntext: string='Login';

  constructor() { }

  ngOnInit(): void {
  }

  // login(loginForm){
  //   console.log("Form is submitted")
  // }
  textBtnConfig = {
    type:'submit',
    styles: {
      backgroundColor: '#ffff',
      color: 'black',
      fontFamily: 'Montserrat',
      fontSize: '18px',
      borderColor: '#fff',
      width: '130px',
      height: '40px',
      border: '1px solid #949494',
      borderRadius: '0px',
      },text:['']
  }

}
