import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  form1: FormGroup = new FormGroup({
    mobileNo: new FormControl(''),
  });

  showFirstdiv: boolean = false;
  showSeconddiv: boolean = false;
  mobileNovalue: string;
  timeLeft = 30;

  constructor() {}

  continue(val): void {
    this.showSeconddiv = true;
    this.mobileNovalue = val;
    const timeId = setInterval(() => {
      if (this.timeLeft == 0) {
        clearTimeout(timeId);
      } else {
        this.timeLeft;
        this.timeLeft--;
      }
    }, 1000);
  }

  resendOtp() {
    this.timeLeft = 30;
    const timeId = setInterval(() => {
      if (this.timeLeft == 0) {
        clearTimeout(timeId);
      } else {
        this.timeLeft;
        this.timeLeft--;
      }
    }, 1000);
  }

  editNumber() {
    this.showSeconddiv = false;
  }

  ngOnInit(): void {}
}
