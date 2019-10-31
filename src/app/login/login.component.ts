import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignupComponent} from '../signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  // signupComp: SignupComponent;

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/signup']);
  }

}
