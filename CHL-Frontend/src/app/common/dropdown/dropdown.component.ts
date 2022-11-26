import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})

/*
//PARENT HTML
<app-dropdown [states]="optionList" [dropConfig]="textDropConfig"></app-dropdown>

//PARENT TS
textDropConfig = {
  //
    ONLY SEND IN STYLES ONLY IF YOU WANT TO CHANGE THE DEFAULT STYLES
    styles: {
      // width: '100%',
      // paddingTop: '0.5em',
      // ...
    }
  }

  optionList = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh"
  ];
*/

export class DropdownComponent implements OnInit {
  @Input() dropConfig!: any;
  @Input() states!: string[];

  @Output('value') selectedDropdown = new EventEmitter<string>();

  // selectedState:string = ''

  constructor() {}

  ngOnInit(): void {}

  emitEvent(selected: string) {
    console.log(selected)
    // this.selectedState = selected
    this.selectedDropdown.emit(selected);
  }
}
