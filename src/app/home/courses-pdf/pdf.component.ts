import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  showPdf: boolean = false;
  user = localStorage.getItem('user');
  token = localStorage.getItem('token');
  profileProductResponse:any;
  constructor(private http: HttpClient,private route:Router) {}

  readPdf() {
    this.showPdf = true;
  }


  findUserProductsDetails(){
       // this.signinForm.controls['role_id'].setValue(this.role);
       console.log('result---------')
    
       this.http
       .get(
         'http://localhost:8080/api/test/getUserProductsDetails?userName='+this.user
      //http://localhost:8080/swagger-ui.html
     
       )
       .subscribe((result) => {
        this.profileProductResponse = result;
         console.log('result--------->'+ this.profileProductResponse); 
     }
       );
  }
  ngOnInit(): void {
    let role = localStorage.getItem("role");
    if(role == "seller")
  {
  
    this.findUserProductsDetails();
  }
  else{
    alert('Access is denied');
  this.route.navigate(['/homepage']);
  }
}
}
