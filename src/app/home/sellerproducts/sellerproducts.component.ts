import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sellerproducts',
  templateUrl: './sellerproducts.component.html',
  styleUrls: ['./sellerproducts.component.scss']
})
export class SellerproductsComponent implements OnInit {

  constructor(private http: HttpClient,private route: Router) {  }
  productResponse:any
  user = localStorage.getItem('user');
  getSellerProducts(){
  
    // this.signinForm.controls['role_id'].setValue(this.role);
    console.log('result---------')
    
     this.http
     .get(
       'http://localhost:8080/api/test/getUserProductsDetails?userName='+this.user
   
     )
     .subscribe((result) => {
      this.productResponse = result;
       console.log('result--------->'+ this.productResponse.id);
       
    
   
   
   }
     );
  }

  addImages(id:any){
    this.route.navigate(
      ['fileUpload'],
      { queryParams: { id: id } }
    );
  }

  ngOnInit(): void {
    let role = localStorage.getItem("role");
  if(role == "seller")
{
    this.getSellerProducts();
}
else{
  alert('Access Denied');
  this.route.navigate(['/homepage']);
}
  }


}
