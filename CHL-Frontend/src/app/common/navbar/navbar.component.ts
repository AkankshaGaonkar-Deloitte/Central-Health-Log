import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('btntext') Text: string = "Login";
  @Input('name') name: string = "Your Profile";
  @Input('button') btn: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  message = 'Click on a button';
  textBtnConfig = {
    styles: {
      width: '100%',
      height: '50px',
      backgroundColor: '#fff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      borderRadius: '1px',
      borderColor: '#1CB5BD'
    },
    text: this.Text
  };

  imgBtnConfig = {
  };

  onClickEventReceived(event: any) {
    this.message = event;
  }

}
