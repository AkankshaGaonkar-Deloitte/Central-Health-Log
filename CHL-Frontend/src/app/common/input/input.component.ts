import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputType:string = 'number'
  @Input() inputLabel:string = 'Enter details'
  @Output() outputEmit = new EventEmitter<string | number | null>()

  userInput:string = ''

  @Input() validations = {
    required: '',
    minLength: '',
    maxLength: '',
    pattern: '^[6-9]\d{9}$'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
