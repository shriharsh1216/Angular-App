import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
addtocart(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}
item: any;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  order: string;
  productDetails : any
  ngOnInit(): void {
    this.route.queryParams
  
    .subscribe(params => {
      console.log(params); // { order: "popular" }

      this.order = params.id;

      console.log(this.order);
   
      this.http



      .get(
        'http://localhost:8080/api/test/findProduct?id='+this.order
    
      )
      .subscribe((result) => {
     
       this.productDetails= result;
        console.log("result is-----"+this.productDetails.product_name);
      } );
    });
      //
       // popular
    }
  
  

}
