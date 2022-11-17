import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() menus={ '1': ['Dashboard','/patient-dashboard']} ;

Dashboard:string="Dashboard";

  constructor() { }


  ngOnInit(): void {
  }

}
