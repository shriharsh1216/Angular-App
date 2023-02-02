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
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss'],
})
export class InstructorLoginComponent implements OnInit {

  public testResponse;
  detailsForm: FormGroup = new FormGroup({
    
   
    full_name: new FormControl('', [Validators.required]),
    industry_category: new FormControl('', [Validators.required]),
    company_name: new FormControl('', [Validators.required]),
    industry_type: new FormControl('', [Validators.required]),

    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pinCode: new FormControl('', [Validators.required]),

    bank_name: new FormControl('', [Validators.required]),
    ifsc_code: new FormControl('', [Validators.required]),
    acc_number: new FormControl('', [Validators.required]),
    branch_name: new FormControl('', [Validators.required]),
   
  });

  emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  selectedCategoryinterest: string;
  resumeSelected: string;
  maxContentSize: 1048;

 
  route: any;
  constructor(private http: HttpClient) {}
user = localStorage.getItem('user');
 


  saveDetails(){
  console.log("user name-------"+this.user)
    this.http
    .post(
      'http://localhost:8080/api/test/userDetails?userName='+this.user,this.detailsForm.value
  
    ) .subscribe((result) => {
       
      console.log('result--------->');
      this.testResponse = result
      console.log("response state--------"+this.testResponse.message);
    
   
    },
    (err:HttpErrorResponse)=>{
      this.testResponse = err;
      if(this.testResponse.status = 401)
      {
        
       
        alert('signup failure bad credentials');
        
  
      }
     
      alert(err.status);
    });
  
   
    
  }
  ngOnInit(): void {}
}
