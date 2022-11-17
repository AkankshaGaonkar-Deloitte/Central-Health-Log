import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CHL-Frontend';
  menus={'1':["Dashboard","/patient-dashboard"],'2':["Patient Details","/patient-details"],'3':["Past Records","/past-records"]};
}
