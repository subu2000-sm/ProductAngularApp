import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  LoginForms=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    name:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  onSubmit(){
    this.userService.add([this.LoginForms.value.email,this.LoginForms.value.password,this.LoginForms.value.name]).subscribe()
    this.router.navigateByUrl("login")
  }
  get Email(){
    return this.LoginForms.get('email') as FormControl
  }
  get Password(){
    return this.LoginForms.get('password') as FormControl
  }
  get Name(){
    return this.LoginForms.get('name') as FormControl
  }
}
