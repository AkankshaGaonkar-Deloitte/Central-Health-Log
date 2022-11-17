import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textBtnConfig = {
    styles: {
      backgroundColor: '#ffff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      gap: '10px',
      width: '150px',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
      

    },text:['']
  }

}
