import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  textDropConfig = {
    styles: {
      width: '100%',
      textAlign: 'center',
      background: 'white',
      borderRadius: '0px',
      fontSize: '24px',
      border: '0px',
      outline: '0px',
      fontFamily:'Montserrat'

    }
  };
  @Input() droptxt!: string[];
  @Input() btnConfig!: any;
  @Input() btntext!: string;
  @Output() onClick = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickBtn($event: any) {
    this.onClick.emit($event);
  }

  saveValue($event:string){
    if ($event==='Logout'){this.router.navigate(['/login']);
  }
  }
  onImgBtnClick(event: any) {
    console.log("HI");
  }
  // emitEvent() {
  //   this.onClick.emit('clicked')
  // }
  


}
