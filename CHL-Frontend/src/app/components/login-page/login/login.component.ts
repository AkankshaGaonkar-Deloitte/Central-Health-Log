import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
onClickEventReceived($event: any) {
throw new Error('Method not implemented.');
}

  @Input('btntext') btntext: string='Login';
  constructor() { }

  ngOnInit(): void {
  }
  textBtnConfig = {
    styles: {
      backgroundColor: '#fff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      borderColor: '#1CB5BD',
      padding: '8px 54px',
      gap: '10px',
      width: '33%',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',

    },text:['']
  }

}
