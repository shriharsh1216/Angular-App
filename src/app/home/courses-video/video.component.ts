import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  

  constructor(private route:Router) {}

  ngOnInit(): void {
    let role = localStorage.getItem("role");
    let isLogin = localStorage.getItem("user");
    if(isLogin){
   console.log("inside")
       if(role != "admin")
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
