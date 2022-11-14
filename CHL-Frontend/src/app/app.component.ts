import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CHL-Frontend';

  checkboxInputs = ['Angular', 'Spring', 'Java', 'SQL']

  onClickEventReceived($event: string[]) {
    console.log(`At parent + ${$event}`);
    
  }

}
