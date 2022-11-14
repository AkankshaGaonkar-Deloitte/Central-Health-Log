import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checkList:string[] = ['A','B','C']
  @Output('value') selectedDropdown = new EventEmitter<string>();

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
    
  }

}
