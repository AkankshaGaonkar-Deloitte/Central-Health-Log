import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {



  @Input() btnConfig={type:"button",styles:{}};
  @Input() btntext!: string;
  @Output() onClick = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickBtn($event: any) {
    this.onClick.emit($event);
  }
  // emitEvent() {
  //   this.onClick.emit('clicked')
  // }



}
