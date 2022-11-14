import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkList:string[] = ['A','B','C']

  //constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';
   
  form: FormGroup;
  webData = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Laravel' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'React' }
  ];
  
  get ordersFormArray() {
    return this.form.controls['orders'] as FormArray;
  }
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
  
    this.addCheckboxesToForm();
  }
  
  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
  
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked:string, i:number) => checked ? this.webData[i].id : null)
      .filter((v: null) => v !== null);
    console.log(selectedOrderIds);
  }

}
