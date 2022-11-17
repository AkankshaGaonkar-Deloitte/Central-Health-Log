import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-records',
  templateUrl: './past-records.component.html',
  styleUrls: ['./past-records.component.scss']
})
export class PastRecordsComponent implements OnInit {

  textBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#1CB5BD',
      height: '40px',
      width: '120px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      textAlign: 'center',
  
      }
  };

constructor() { }

ngOnInit(): void {
}

}
