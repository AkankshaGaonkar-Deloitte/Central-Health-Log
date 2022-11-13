import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input('btntext') btntext: string='Login';
  constructor() { }

  ngOnInit(): void {
  }
  textBtnConfig = {
    styles: {
      width: '120px',
      height: '40px',
      color: '#fff',
      cursor: 'pointer'
    }
  }

}
