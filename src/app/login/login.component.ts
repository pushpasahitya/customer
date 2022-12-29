import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginCreds:any= new FormGroup({
    email:new FormControl("", Validators.required),
    password:new FormControl("", Validators.required)
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {

    this.router.navigate(["./dashboard/home"])

  }

}
