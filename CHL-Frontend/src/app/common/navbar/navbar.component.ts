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
      fontSize: '0.7em',
      outline: 'none',

    }
  };
  message: string = 'Click on a button';
  textBtnConfig = {
    type:"button",
    styles: {

      backgroundColor: '#fff',
      color: '#1CB5BD',
      fontSize: '0.9em',
      borderColor: '#1CB5BD',
      width: '100%',
      height: '1.2em',
        
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

