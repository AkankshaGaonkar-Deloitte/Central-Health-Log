import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  //@Input() text!: string;
  //@Input() btnClass!: string;
  @Input() btnConfig!: any;
  @Input() text!: string;
  //@Output() onClick = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
