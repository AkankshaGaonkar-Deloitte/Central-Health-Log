import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('text')
  text!: string;

  constructor() { console.log('app-button');}

  ngOnInit() {
    console.log(this.text);
    
  }

}
