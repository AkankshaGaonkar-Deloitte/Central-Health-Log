import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
//   onClick(tab:any,menus:KeyValue(string:[str])){
//   console.log(tab[2]);
//   for (var i of menus) {
//     console.log(i)
//     if (i===tab){
//       i[2]=1;
//     }
//     else{
//       i[2]=0;
//     }
// }
//   tab[2]=1;
//   console.log(tab[2]);  
//         }  
@Input() menus={ '1': ['Dashboard','/patient-dashboard',0]} ;
tab:number=0;
Dashboard:string="Dashboard";


  constructor() { }


  ngOnInit(): void {
  }

}
