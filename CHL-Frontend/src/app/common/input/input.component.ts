import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /*
  //PARENT TS
  ipConfig = {
    type: 'tel',
    label: 'Ph no',
    placeholder: '',
    styling: {  
      width: '200px',
      height: '40px'
    },
    validations : {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: '[6-9]{1}[0-9]{9}'
    },
    patternErrorMessage: 'Invalid ph no'
  };

  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }

  //PARENT HTML
  <app-input [ipConfig]="ipConfig" (outputEmit)="onClickEventReceived($event)"></app-input>

  
  */

  @Input() ipConfig = {
    type: 'text',
    label: 'Name',
    placeholder: '',
    styling: {  
      width: '15em',
      height:'2.4em'
    },
    validations : {
      required: '',
      minLength: '2',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Must be a valid input'
  }

  @Output() outputEmit = new EventEmitter<string | number | null>()

  userInput:string = ''

  emitChanges() {
    console.log(`At child: ${this.userInput}`)
    this.outputEmit.emit(this.userInput)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
