import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyPrescriptionService } from 'src/app/service/verify-prescription/verify-prescription.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('btntext') Text: string = "Login";
  @Input('name') name: string = "Your Profile";
  @Input('button') btn: boolean = true;
  @Input() verifyPrescription: boolean = false

  prescriptionToVerify!: Blob
  checked: boolean = false
  displayStyle = "none";
  verificationStatus: string = ''

  constructor(
    private router: Router,
    private verifyPrescriptionService: VerifyPrescriptionService
  ) { }

  ngOnInit(): void {
  }

  textDropConfig = {
    styles: {
      fontSize: '0.7em',
      outline: 'none',

    }
  };
  message: string = 'Click on a button';
  textBtnConfig = {
    type:"button",
    styles: {
      height: '2em',

    }
  };

  ipConfig = {
    type: 'text',
    label: 'firstname',
    placeholder: '',
    styling: {
      width: '15.5em',
      height: '2em',
      borderRadius: '0.2em'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  saveValue($event:string){
    if ($event==='Logout'){this.router.navigate(['/login']);
    sessionStorage.clear();
  }
  }

  onClickEventReceived($event: any) {
    if (this.Text === 'Login') { this.router.navigate(['/login']) }
    else { if (this.Text === 'Register') { this.router.navigate(['/registration']) } };
  }

  openPopup() {
    this.displayStyle = "block";    
  }

  closePopup() {
    this.displayStyle = "none";
    this.checked=false
  }

  verifyPresc(){
    console.log(this.prescriptionToVerify)
    this.verifyPrescriptionService.verifyPrescription(this.prescriptionToVerify)
    .subscribe(response => {
      console.log(response);
      this.checked = true
      this.verificationStatus = response.responseMessage
    })
  }

  changeVerify(event: Event){
    console.log(event);
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.prescriptionToVerify = fileList[0]
      console.log(this.prescriptionToVerify);
      
    }
  }

}

