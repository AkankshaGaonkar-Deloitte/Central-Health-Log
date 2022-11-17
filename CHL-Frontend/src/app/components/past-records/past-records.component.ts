import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-records',
  templateUrl: './past-records.component.html',
  styleUrls: ['./past-records.component.scss']
})
export class PastRecordsComponent implements OnInit {

    textBtnConfig = {
      type:"submit",
      styles: {
         background: '#fff',
         color: '#1CB5BD',
         height: '40px',
         width: '120px'
  
      }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
