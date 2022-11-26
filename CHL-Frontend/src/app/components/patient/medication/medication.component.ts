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
    type:"button",
    styles: {
      backgroundColor: '#ffff',
      color: '#1CB5BD',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      width: '100px',
      height: '20px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
      

    }}
    textBtnConfig1 = {
      type:"button",
      styles: {
        backgroundColor: '#1CB5BD',
        color: '#ffff',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        width: '120px',
        height: '40px',
        border: '1px solid #1CB5BD',
        borderRadius: '4px',
      
  
      }}
  
  sidebartabs={'1':["Dashboard","/patient-dashboard",0],'2':["Personal Details","/personal-details",0],'3':["Medical Data","/medical-data",0],'4':["Medications",'/medications',1],'5':["Past Records","/past-records",0]};

}