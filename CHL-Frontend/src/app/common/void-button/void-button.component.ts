import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-void-button',
  templateUrl: './void-button.component.html',
  styleUrls: ['./void-button.component.scss']
})
export class VoidButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() btnClass!: string;
  @Input() btnConfig!: any;
  //@Output() onClick = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
