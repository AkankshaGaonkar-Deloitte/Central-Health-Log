import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
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
