import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles: [`:host ::ng-deep .btn{ height: 30px;padding-bottom: 30px;
    padding-top: 0px !important }`]
  // to change the style of child component
})
export class NavbarComponent implements OnInit {
  @Input('btntext') btntext: string='Login';

  constructor() { }

  ngOnInit(): void {
  }

  textBtnConfig = {
    styles: {
      width: '120px',
      height: '40px',
      backgroundColor: '#1CB5BD',
      color: '#fff',
      cursor: 'pointer'
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
  //     width: '120px',
  //     height: '40px',
  //     backgroundColor: '#E9F7F8',
  //     color: 'black',
  //     cursor: 'pointer',
  //     fontSize: '20px'
  //   }
  // };

}
