import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
onClickEventReceived($event: any) {
throw new Error('Method not implemented.');
}

  @Input('btntext') btntext: string='Login';
  @Input() inputType:string = 'string'
  @Input() inputLabel:string = 'Username'
  @Output() outputEmit = new EventEmitter<string | number | null>()

  userInput:string = ''

  @Input() validations = {
    required: '',
    minLength: '3',
    maxLength: '10',
  }

  emitChanges() {
    console.log(`At child: ${this.userInput}`)
    this.outputEmit.emit(this.userInput)
    
  }

  constructor() { }

  ngOnInit(): void {
  }
  textBtnConfig = {
    styles: {
      backgroundColor: '#ffff',
      color: 'black',
      fontFamily: 'Montserrat',
      fontSize: '18px',
      // borderColor: '#1CB5BD',
      
      // padding: '8px 54px',
      // gap: '10px',
      width: '130px',
      height: '40px',
      border: '1px solid #949494',
      
      
      
      
      borderRadius: '0px',
      // display: 'flex',
      // flex-direction: 'coloumn',
      // justify-content: 'space-between';
      // align-items: 'center'
            
      

    },text:['']
  }
  

}
