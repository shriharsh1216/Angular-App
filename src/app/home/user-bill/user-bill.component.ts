import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.scss']
})
export class UserBillComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user = localStorage.getItem('user');
  billRes: any;
  cartRes:any
  ngOnInit(): void {
    this.generateBill()
    this.getProducts()
  }
 temp:any
  generateBill(){
    console.log('result---------')
    
    this.http
    .get(
      'http://localhost:8080/api/test/generateBill?userName='+this.user
  
    )
    .subscribe((result) => {
  this.billRes = result;
      console.log('result--------->');
  
  }
    );
  }
  orderCreated(){

    this.http
    .post(
      'http://localhost:8080/api/test/createOrder',this.temp
    )
    .subscribe((result) => {
      this.cartRes = result;
      
     console.log("results---------"+this.temp)
    
  
  }
    );
    alert('order created');
  }
  getProducts(){
 
    this.http
    .get(
      'http://localhost:8080/api/test/showMyCart?username='+this.user
  
    )
    .subscribe((result) => {
      this.cartRes = result;
      this.temp = result;
     console.log("results---------"+result.toString())
    
  
  }
    );
}
}
