import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  onClick(tab: any, menus: any) {
    for (let key in menus) {
     if(menus[key]==tab.value){
        menus[key][2]=1;
     }else{
      menus[key][2]=0;
     }
    }
  }

  @Input() tabs = { '1': ['Patient Dashboard', '/doc-patient-dashboard', 1],'2': ['Medical Data', '/doc-medical-data', 0],
  '3': ['Medications', '/doc-medications', 0],'4': ['Past Records', '/doc-past-records', 0] };

  constructor() { }

  ngOnInit(): void {
  }

}
