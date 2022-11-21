import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  menus={'1':["Dashboard","/patient-dashboard"],'2':["Personal Details","/personal-details"],'3':["Medical Data","/medical-data"],'4':["Medications",'/medications'],'5':["Past Records","/past-records"]};


  @Input('btntext') btntext: string='Login';
  constructor() { }

  ngOnInit(): void {
  }
  textBtnConfig = {
    styles: {
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      // borderColor: '#1CB5BD',
      
      // padding: '8px 54px',
      gap: '10px',
      width: '150px',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
      

    },text:['']
  }

}
