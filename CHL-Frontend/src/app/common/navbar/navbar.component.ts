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
    },
    text: 'Login'
  };

}
