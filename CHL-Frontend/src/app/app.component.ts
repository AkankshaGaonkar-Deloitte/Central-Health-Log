import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CHL-Frontend';

  textBtnConfig = {
    type:"submit",
    styles: {
       background: '#1CB5BD',
       color: '#fff',
       height: '40px'

    }
  }
  
}
