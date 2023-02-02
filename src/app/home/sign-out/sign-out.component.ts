import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('calling sign out')
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.setItem("signOut","true");
  }

}
