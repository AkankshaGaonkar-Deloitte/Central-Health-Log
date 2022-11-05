import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  // to change the style of child component
})
export class NavbarComponent implements OnInit {
  @Input('btntext') btntext: string='Login';

  constructor() { }

  ngOnInit(): void {
  }

  textBtnConfig = {
    styles: {
      width: '6em',
      height: '2em',
      backgroundColor: '#1CB5BD',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '20px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700',
      paddingLeft: '1.7em',
      display: 'inline-flex',
      alignItems: 'center'
    }
    //,
    //text: this.btntext
    //text: 'Bye'
  };

  // stateList = [
  //   "Kerala",
  //   "Karnataka",
  //   "West Bengal",
  //   "Uttar Pradesh",
  //   "Mumbai"
  // ]

  // textdropConfig = {
  //   styles: {
  //     width: '100%',
  //     height: '40px',
  //     backgroundColor: '#E9F7F8',
  //     color: 'black',
  //     cursor: 'pointer',
  //     fontSize: '20px'
  //   }
  // };

}
