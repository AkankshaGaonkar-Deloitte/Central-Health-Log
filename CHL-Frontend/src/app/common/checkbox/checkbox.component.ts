import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  /*
    //PARENT COMPONENT HTML
    <app-checkbox [checkList]="checkboxInputs" (selectedCheckbox)="onClickEventReceived($event)"></app-checkbox>

    //PARENT COMPONENT TS
    checkboxInputs = ['Angular', 'Spring', 'Java', 'SQL']

    onClickEventReceived($event: string[]) {
    console.log(`At parent + ${$event}`);
    
  }
  */

  @Input() checkboxConfig!: any
  @Input() checkList:string[] = ['A','B','C']
  @Output() selectedCheckbox = new EventEmitter<string[]>();

  checkedBoxes: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  liveCheck(selected: string){
    console.log(selected)
    if (this.checkedBoxes.includes(selected)) {
      // delete this.checkedBoxes[this.checkedBoxes.indexOf(selected)]
      this.checkedBoxes.forEach( (item, index) => {
        if(item === selected) this.checkedBoxes.splice(index,1);
      });
    } else {
      this.checkedBoxes.push(selected)
    }
    console.log(`checked elements: ${this.checkedBoxes}`);


    this.selectedCheckbox.emit(this.checkedBoxes)
    
  }

}
