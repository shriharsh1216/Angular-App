import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-seller-order',
  templateUrl: './seller-order.component.html',
  styleUrls: ['./seller-order.component.scss']
})
export class SellerOrderComponent implements OnInit {

  websiteList: any = ['Received',
    'Accepted',
    'Packed',
    'Shipped',
    'Delivred']
    selectedTeam = '';
  constructor(private http: HttpClient,private route: Router) { }
  user = localStorage.getItem('user');
  orderSellers: any
  ngOnInit(): void {
    this.showSellersOrders();
  }
  selectChangeHandler (event: any,order:any) {
    //update the ui
    this.selectedTeam = event.target.value;
    this.updateorderStatus(order);
  }
showSellersOrders(){
  console.log('result---------')
    
  this.http
  .get(
    'http://localhost:8080/api/test/getSellersOrders?userName='+this.user

  )
  .subscribe((result) => {
this.orderSellers= result;
    console.log('result--------->'+this.orderSellers);

}
  );
}

goProducts(id:any) {
  this.route.navigate(
    ['productDetails'],
    { queryParams: { id: id } }
  );
}
removeItem(order:any){
  console.log('order----'+order);
this.http.delete('http://localhost:8080/api/test/deleteOrder?id='+order) .subscribe((result) => {
  console.log(result);
});
}
updateorderStatus(order:any){
 
  order.status = this.selectedTeam;

  this.http
  .put(
    'http://localhost:8080/api/test/updateOrderStatus',order
  )
  .subscribe((result) => {
    
    
   console.log("results---------")
  alert('status updated');

}
  );
 
}

}
