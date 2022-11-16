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
      // backgroundColor: '#1CB5BD',
      color: '#000',
      fontFamily: 'Montserrat',
      fontSize: '18px',
      // borderColor: '#1CB5BD',
      
      // padding: '8px 54px',
      // gap: '10px',
      width: '130px',
      height: '40px',
      border: '1px solid #949494',
      
      borderRadius: '0px',
      // display: 'flex',
      // flex-direction: 'coloumn',
      // justify-content: 'space-between';
      // align-items: 'center'
            
      

    },text:['']
  }

}
