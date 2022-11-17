import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('btntext') Text: string = "Login";
  @Input('name') name: string = "Your Profile";
  @Input('button') btn: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  textDropConfig = {
    styles: {
      width: '100%',
      textAlign: 'center',
      background: 'white',
      borderRadius: '0px',
      fontSize: '24px',
      border: '0px',
      outline: '0px',
      fontFamily:'Montserrat'

    }
  };
  message: string = 'Click on a button';
  textBtnConfig = {
    type:"button",
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
    }
  };

  saveValue($event:string){
    if ($event==='Logout'){this.router.navigate(['/login']);
  }
  }

  onClickEventReceived($event: any) {
    if (this.Text === 'Login') { this.router.navigate(['/login']) }
    else { if (this.Text === 'Register') { this.router.navigate(['/registration']) } };
  }

}

