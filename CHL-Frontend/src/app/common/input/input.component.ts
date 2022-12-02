import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /*
  //PARENT TS
  prefil:string = 'Hello' //should only be used is you want to prefil the input field (e.g., in updating any user details)

  ipConfig = {
    type: 'tel',
    label: 'Ph no',
    placeholder: '',
    styling: {  
      height: '40px'
    },
    validations : {
      required: 'false',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: 'Invalid ph no'
  };

  onClickEventReceived($event: string|number|null) {
    console.log(`At parent ${$event}`);
  }

  //PARENT HTML
  // can be used for normal input field
  <app-input [ipConfig]="ipConfig" (outputEmit)="onClickEventReceived($event)"></app-input>

  // must be used if you want the added prefil option
  <app-input [userInput]="prefil" [ipConfig]="ipConfig" (outputEmit)="onClickEventReceived($event)"></app-input>
  
  */

  @Input() ipConfig = {
    type: 'text',
    label: 'Name',
    placeholder: '',
    styling: {  
      
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

  @Input() userInput:any = ''

  emitChanges() {
    console.log(`At child: ${this.userInput}`)
    this.outputEmit.emit(this.userInput)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}