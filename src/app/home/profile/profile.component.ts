import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private http: HttpClient) { }
  user = localStorage.getItem('user');
  token = localStorage.getItem('token')
  profileResponse: any;
  getProfile(){
  
    // this.signinForm.controls['role_id'].setValue(this.role);
    console.log('result---------')
    
     this.http
     .get(
       'http://localhost:8080/api/test/getUserDetails?userName='+this.user
    //http://localhost:8080/swagger-ui.html
   
     )
     .subscribe((result) => {
      this.profileResponse = result;
       console.log('result--------->'+ this.profileResponse.company_name); 
   }
     );
  }

  ngOnInit(): void {
    this.getProfile()
  }

} 
