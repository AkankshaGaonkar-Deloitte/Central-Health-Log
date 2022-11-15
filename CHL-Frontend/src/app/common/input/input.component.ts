import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /*
  //PARENT TS
    type:string = 'text'
  label:string = 'Name'

  parentValidations = {
    required: '',
    minLength: '2',
    maxLength: '',
    pattern: ''
  }

  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }

  //PARENT HTML
  <app-input [inputType]="type" [inputLabel]="label" [validations]="parentValidations" (outputEmit)="onClickEventReceived($event)"></app-input>
  */

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

  emitChanges() {
    console.log(`At child: ${this.userInput}`)
    this.outputEmit.emit(this.userInput)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
