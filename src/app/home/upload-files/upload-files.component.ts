import { HttpClient, HttpEventType, HttpResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  

  formData: FormGroup;
  fileToUpload1: File;
  fileToUpload2: File;
  fileToUpload3: File;
  fileToUpload4: File;
  fileToUpload5: File;
  productId: string;
  productDetails : any

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private route: ActivatedRoute,private routess:Router) {}
 
ngOnInit(): void {
  let role = localStorage.getItem("role");
  if(role == "seller")
{

  this.formData = this.formBuilder.group({
    files   : []
  });

  this.route.queryParams
  
    .subscribe(params => {
      console.log(params); // { order: "popular" }

      this.productId = params.id;

      console.log(this.productId);
}


);
}
else{
  alert('Access is denied');
  this.routess.navigate(['/homepage']);
}

}

handleFileInput1(event) {
  this.fileToUpload1 = <File>event.target.files[0];
}

handleFileInput2(event) {
  this.fileToUpload2 = <File>event.target.files[0];
}

handleFileInput3(event) {
  this.fileToUpload3 = <File>event.target.files[0];
}
handleFileInput4(event) {
  this.fileToUpload4 = <File>event.target.files[0];
}
handleFileInput5(event) {
  this.fileToUpload5 = <File>event.target.files[0];
}

onSubmit():void {

 
}

uploadFile1(){
  const formData: FormData = new FormData();
  formData.append('document', this.fileToUpload1, this.fileToUpload1.name+'_pp');
  formData.append('ProductId',this.productId);
 // formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');
console.log("prod------"+this.productId);
  let url = 'http://localhost:8080/api/upload/documents';

  let role = localStorage.getItem("role");
  if(role == "seller")
{
  this.http
    .post(url, formData, {observe: 'response'}).subscribe(
    resp => {
      console.log(resp.body);
    },
    err => {
      console.log(err);

    });
  }
  else{
    alert("Access denied");
  }
}


uploadFile2(){
  const formData: FormData = new FormData();
  formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_pp');
  formData.append('ProductId',this.productId);
 // formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');
 let role = localStorage.getItem("role");
  if(role == "seller")
{
console.log("prod------"+this.productId);
  let url = 'http://localhost:8080/api/upload/documents2';

  this.http
    .post(url, formData, {observe: 'response'}).subscribe(
    resp => {
      console.log(resp.body);
    },
    err => {
      console.log(err);

    });
  }
  else{
    alert("Access denied");
  }
}


uploadFile3(){
  const formData: FormData = new FormData();
  formData.append('document', this.fileToUpload3, this.fileToUpload3.name+'_pp');
  formData.append('ProductId',this.productId);
 // formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');
console.log("prod------"+this.productId);
  let url = 'http://localhost:8080/api/upload/documents3';
  let role = localStorage.getItem("role");
  if(role == "seller")
{
  this.http
    .post(url, formData, {observe: 'response'}).subscribe(
    resp => {
      console.log(resp.body);
    },
    err => {
      console.log(err);

    });
  }
    else{
      alert("Access denied");
    }
}


uploadFile4(){
  const formData: FormData = new FormData();
  formData.append('document', this.fileToUpload4, this.fileToUpload4.name+'_pp');
  formData.append('ProductId',this.productId);
 // formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');
console.log("prod------"+this.productId);
  let url = 'http://localhost:8080/api/upload/documents4';

  this.http
    .post(url, formData, {observe: 'response'}).subscribe(
    resp => {
      console.log(resp.body);
    },
    err => {
      console.log(err);

    });
}



uploadFile5(){
  const formData: FormData = new FormData();
  formData.append('document', this.fileToUpload5, this.fileToUpload5.name+'_pp');
  formData.append('ProductId',this.productId);
 // formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');
console.log("prod------"+this.productId);
  let url = 'http://localhost:8080/api/upload/documents5';

  this.http
    .post(url, formData, {observe: 'response'}).subscribe(
    resp => {
      console.log(resp.body);
    },
    err => {
      console.log(err);

    });
}
  
}



