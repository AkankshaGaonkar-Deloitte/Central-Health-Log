import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  onClick(tab: any, menus: any) {
    for (let key in menus) {
     if(menus[key]==tab.value){
        menus[key][2]=1;
     }else{
      menus[key][2]=0;
     }

    }
  }

  @Input() menus = { '1': ['Dashboard', '/patient-dashboard', 0] };
  Dashboard: string = "Dashboard";

  constructor() { }

  ngOnInit(): void {
  }

}