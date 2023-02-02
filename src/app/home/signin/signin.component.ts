import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from '../otp/otp.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  public tempResponse;
  hideEyeiconpassword = true;
  hideEyeiconconfirmpassword = true;
  
  constructor(public dialog: MatDialog,  private http: HttpClient,
    private route:Router) {}
    toDisplay = true;
  openDialog() {
    this.dialog.open(OtpComponent);
  }
  login(){
  
    // this.signinForm.controls['role_id'].setValue(this.role);
   
     console.log("login value"+this.signinForm.value);
     this.http
     .post(
       'http://localhost:8080/api/auth/signin',this.signinForm.value
   
     )
     .subscribe((result) => {
       
       console.log('result--------->');
       this.tempResponse = result
       console.log("response state--------"+this.tempResponse.message);
        if(this.tempResponse.email != "")
       {
         localStorage.setItem('token',this.tempResponse.jwt);
         localStorage.setItem('user',this.tempResponse.username);
         localStorage.setItem('role',this.tempResponse.roles[0]);
         localStorage.setItem("signin","false");
         //this.cookieService.set('token', this.tempResponse.jwttoken);
        // this.cookieService.set('usertype', 'Internal');
         console.log('login success'+this.tempResponse.jwt);
         console.log('role is---'+this.tempResponse.roles[0]);
         alert('Login success');
         this.toDisplay = false
  //        ROLE_USER,
  // ROLE_SELLER,
  // ROLE_ADMIN
        if(this.tempResponse.roles[0]=="seller")
        {
          this.route.navigate(['/coursescategory']);
        }
        if(this.tempResponse.roles[0]=="admin")
        {
         this.route.navigate(['/homepage']);
        }
        if(this.tempResponse.roles[0]=="user")
        {
         this.route.navigate(['/courseslist']);
        }

       }
    
     },
     (err:HttpErrorResponse)=>{
       this.tempResponse = err;
       if(this.tempResponse.status = 401)
       {
         
        
         alert('Login failure bad credentials');
         
   
       }
      
       alert(err.status);
     });
   
   
   }
  ngOnInit(): void {
    this.toDisplay=true;
    // if( localStorage.getItem('token')){
    //   this.route.navigate(['/courseslist']);
    //  }
  }
}
