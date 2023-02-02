import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appconstants } from '../../Constants/AppConstants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  imageRefs = {
    flyingGirlPic: Appconstants.FLYING_GIRL_PIC,
  };
  constructor(private route:Router) {}

  ngOnInit(): void {

    let role = localStorage.getItem("role");
    let isLogin = localStorage.getItem("user");
    if(isLogin){
   console.log("inside")
       if(role != "admin")
  {
    alert('Access Denied');
    this.route.navigate(['/courses']);
  }
  }

else{
  this.route.navigate(
    ['joinus']
  );
}
  }
}
