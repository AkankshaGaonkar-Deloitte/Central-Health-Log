import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('btntext') Text: string = "Login";
  @Input('name') name: string = "Your Profile";
  @Input('button') btn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  message = 'Click on a button';
  textBtnConfig = {
    styles: {

      backgroundColor: '#fff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      borderColor: '#1CB5BD',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px 54px',
      gap: '10px',
      width: '100%',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
    },
    text: this.Text
  };

  imgBtnConfig = {
  };

  onClickEventReceived(event: any) {
    this.message = event;
  }

}
