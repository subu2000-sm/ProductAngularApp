import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getName(){
    if(localStorage.getItem("email")==null){
      return "Please Login to Add Product"
    }
    return "welcome "+localStorage.getItem("email")
  }

}
