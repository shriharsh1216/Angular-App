import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ProfileComponent } from '../profile/profile.component';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpenDialogBoxComponent } from '../open-dialog-box/open-dialog-box.component';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor(private http: HttpClient,private route:Router,public dialog: MatDialog) {}
//
products:  [];
productresponse:any;
user = localStorage.getItem('user');
@ViewChild('paginator') paginator: MatPaginator;
totalElements: number ;


openDialog(): void {
  this.dialog.open(OpenDialogBoxComponent, {
    width: '250px'
  });
}


addtocart(id:any,price:any){
  console.log('id'+id,'price'+price)
  this.addToCarts(id,price);
  this.openDialog();
}

addCartService(id:any,price:any){
  this.http
  .get(
    'http://localhost:8080/api/test/findAllProducts'

  )
}

getProducts(page:any){
 
  this.http
  .get(
    'http://localhost:8080/api/test/findAllProducts?page='+page

  )
  .subscribe((result) => {
    this.products = result['content'];
    this.productresponse = result['content'];
            this.totalElements = result['totalElements'];
    
   // this.productresponse = result
    console.log('result--------->'+this.totalElements);
    
for (var val of this.productresponse) {
  console.log(val.id); // prints values: 10, 20, 30, 40
}
})

}
addToCarts(id:any,price:any){
 var cart ={
"productId":id,
"userName":this.user,
"price":price

 }
  this.http
  .post(
    'http://localhost:8080/api/test/addTOCart',cart

  ) .subscribe((result) => {
  });

}

goProducts(id:any) {
  this.route.navigate(
    ['productDetails'],
    { queryParams: { id: id } }
  );
}

nextPage(event: PageEvent) {
  const request = {};
  // request['page'] = event.pageIndex.toString();
  // request['size'] = event.pageSize.toString();
  console.log("event--------"+event.pageIndex);
  this.getProducts(event.pageIndex);
}


  ngOnInit(): void {
    this.getProducts(0);
  }
}

