import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type:string = 'text'
  label:string = 'Username'

  parentValidations = {
    required: '',
    minLength: '3',
    maxLength: '10',
    pattern: ''
  }

  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }
  type2:string = 'password'
  label2:string = 'Password'

  parentValidations2 = {
    required: '',
    minLength: '3',
    maxLength: '10',
    pattern: ''
    
  }

  onClickEventReceived2($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }



  @Input('btntext') btntext: string='Login';

  constructor() { }

  ngOnInit(): void {
  }

  // login(loginForm){
  //   console.log("Form is submitted")
  // }
  textBtnConfig = {
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
