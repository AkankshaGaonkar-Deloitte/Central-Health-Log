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
    placeholder: '',
    styling: {  
      width: '15em',
      height:'2em'
    },
    validations : {
      required: '',
      minLength: '2',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Must be a valid input'
  }


  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }

  ipConfig2 = {
    type: 'password',
    label: 'password',
    placeholder: '',
    styling: {  
      width: '15em',
      height:'2em'
    },
    validations : {
      required: '',
      minLength: '2',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Must be a valid input'
  }
  



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
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontFamily: 'Montserrat',
      fontSize: '18px',
      borderColor: '#fff',
      width: '130px',
      height: '40px',}
  }
  textBtnConfig2 = {
    type:'submit',
    styles: {
      fontSize: '18px',
      width: '130px',
      height: '40px',
  }

}
}
