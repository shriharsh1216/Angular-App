import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
 public toDisplay=localStorage.getItem("toDisplay");
 
public signin : boolean;
public signOut :boolean;
  

  ngOnInit(): void {
    console.log("i am calling ng init")
  
    if(localStorage.getItem('user')){
      console.log("i am calling signout")
    
       this.signin = false;
       this.signOut = true;
     
    }
    else{
      console.log("i am calling signin")
      this.signin = true;
      this.signOut = false;
    
      
    }

  }


}
