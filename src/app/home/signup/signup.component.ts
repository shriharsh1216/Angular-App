import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // mobilePattern: '[0-9]{0-10}';
  //emailPattern : /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
  role:any[]
  mobilePattern = '^((\\+91-?)|0)?[0-9]{10}$';
  isDisabled = false;
  contact_number:number;
  emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  signupForm: FormGroup = new FormGroup({
    
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    
    username: new FormControl('', [Validators.required]),
    company_gst_number: new FormControl('', [Validators.required]),
    contact_number: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
   
   
   
  });
  public tempResponse;
  passwordValidator = false;
  hideEyeiconpassword = true;
  hideEyeiconconfirmpassword = true;
  otpValueMob:number
  mobileNumber:number
  constructor(private http: HttpClient,
    private route:Router) {}
  ngOnInit(): void {
    this.isDisabled = true;
  }

  onSubmit() {}
  signUp(){
  
    // this.signinForm.controls['role_id'].setValue(this.role);
   
     console.log("signup value"+this.signupForm.value);
     this.http
     .post(
       'http://localhost:8080/api/auth/signup',this.signupForm.value
   
     )
     .subscribe((result) => {
       
       console.log('result--------->');
       this.tempResponse = result
       console.log("response state--------"+this.tempResponse.message);
        if(this.tempResponse.email != "")
       {
         localStorage.setItem('token',this.tempResponse.jwt);
         localStorage.setItem('user',this.tempResponse.username);
   
         //this.cookieService.set('token', this.tempResponse.jwttoken);
        // this.cookieService.set('usertype', 'Internal');
         console.log('signup success'+this.tempResponse.jwt);
         alert('signup success');
         this.route.navigate(['/courseslist']);
   
       }
    
     },
     (err:HttpErrorResponse)=>{
       this.tempResponse = err;
       if(this.tempResponse.status = 401)
       {
         
        
         alert('signup failure bad credentials');
         
   
       }
      
       alert(err.status);
     });
   
   
   }

   sendOTP(mobile_number:any){
    alert("otp sent");
   
    this.http
    .get(
      'http://localhost:8080/api/phoneNumber/generateTOTP/mobile_number?'+mobile_number
  
    )
    .subscribe((result) => {
      console.log('result--------->');
    });
  
  
  }

   verifyOTP(otpValueMob:any){
    this.otpValueMob = otpValueMob
    alert("otp sent"+this.otpValueMob);
    this.http
    .get(
      'http://localhost:8080/api/phoneNumber/validateOtp?'+otpValueMob
  
    )
    .subscribe((result) => {
      console.log('result--------->'+result);

    });
    this.isDisabled = false;

   }
  checkPasswords() {
    let password = this.signupForm.get('password').value;
    let confirmPassword = this.signupForm.get('confirmPassword').value;
    if (password === confirmPassword) {
      this.passwordValidator = false;
    } else {
      this.passwordValidator = true;
    }
  }
}
