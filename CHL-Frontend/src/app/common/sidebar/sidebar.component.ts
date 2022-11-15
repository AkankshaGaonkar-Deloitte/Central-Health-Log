import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
menus={'1':["Dashboard","/patient-dashboard"],'2':["Patient Details","/patient-details"],'3':["Past Records","/past-records"]};
Dashboard:string="Dashboard";

  constructor() { }
  

  ngOnInit(): void {
  }

}
