import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.scss'],
})
export class BusinessLoginComponent implements OnInit {
  emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  user = localStorage.getItem('user');
 
  selectedCategoryinterest: string;

  businessLoginform: FormGroup = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    serial_number: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    sub_category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  formData: FormGroup;
  fileToUpload1: File;
  fileToUpload2: File;
  categoryList: any;
  categoryResponse:any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private route:Router) {}
  

addProduct(){
  console.log("products are getting added")
  this.http
  .post(
    'http://localhost:8080/api/test/saveProducts?userName='+this.user,this.businessLoginform.value

 )  .subscribe((result) => {
    
       console.log('result--------->'+ this.businessLoginform.value); 
       alert("Product uploaded successfully")
   }
     );
}

ngOnInit(): void {
this.getAllCategories();
  this.formData = this.formBuilder.group({
    files   : []
  });
  let role = localStorage.getItem("role");
  if(role != "seller")
{
  alert('Access Denied');
  this.route.navigate(['/homepage']);
}
}




getAllCategories(){
  this.http
  .get(
    'http://localhost:8080/api/test/getAllCategory'

  )
  .subscribe((result) => {
   this.categoryResponse = result;
    console.log('result--------->'+ this.categoryResponse); 
}
  );
}
  
}
