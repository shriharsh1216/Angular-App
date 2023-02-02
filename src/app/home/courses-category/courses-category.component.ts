import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses-category',
  templateUrl: './courses-category.component.html',
  styleUrls: ['./courses-category.component.scss'],
})
export class CoursesCategoryComponent implements OnInit {
  constructor( private route:Router) {}

  ngOnInit(): void {
    let role= localStorage.getItem("role");
    let isLogin = localStorage.getItem("user");
    if(isLogin){

    if(role != "seller")
{
  alert('Access Denied');
  this.route.navigate(['/homepage']);
}
    }

else{
  this.route.navigate(
    ['joinus']
  );
}

  }
}
