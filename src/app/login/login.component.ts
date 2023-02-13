import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:UserService) { }

  ngOnInit(): void {
  }
  LoginForms=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(4)])
  })
  status:boolean=true
  onSubmit(){
    this.loginService.authenticate([this.LoginForms.value.email,this.LoginForms.value.password]).subscribe(
      (res)=>{

        if(res==null){
          this.status=false
        }
        else{
        console.log(this.LoginForms.value.email)
        localStorage.setItem("email",this.LoginForms.value.email+"")
        this.router.navigateByUrl("")
        }
      },
      (err)=>{
        console.log(err)
      }
    );


  }
  get Email():FormControl{
    return this.LoginForms.get("email") as FormControl
  }
  get Password():FormControl{
    return this.LoginForms.get("password") as FormControl
  }
}
