import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() dropConfig!: any;
  @Input() states!: string[];

  @Output() selectedDropdown = new EventEmitter<string>();

  selectedState:string = 'Andaman and Nicobar Islands'

  constructor() {}

  ngOnInit(): void {}

  saveState(selected: string) {
    console.log(selected)
    this.selectedState = selected
    this.selectedDropdown.emit(selected);
  }
}
