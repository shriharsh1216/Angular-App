import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient,private route: Router) { }
  order: string;
  cartres : any;
  user = localStorage.getItem('user');
  id = 0;
  ngOnInit(): void {
   
    let isLogin = localStorage.getItem("user");
    if(isLogin){
   console.log("inside")
       this.getProducts();
    }
    else{
      this.route.navigate(
        ['joinus']
      );
    }
  }
    getProducts(){
 
      this.http
      .get(
        'http://localhost:8080/api/test/showMyCart?username='+this.user
    
      )
      .subscribe((result) => {
        this.cartres = result;
        
       console.log("results---------"+result.toString())
      
    
    }
      );
  }
 
  
  

  showMyCart(){
    this.http
    .get(
      'http://localhost:8080/api/test/showMyCart?username='+this.user
  
    );
  }
  goProducts(id:any) {
    this.route.navigate(
      ['productDetails'],
      { queryParams: { id: id } }
    );
  }
  checkout(){
    this.route.navigate(
      ['userBill']
    );
  }
}
