import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService,private router:Router) { }

  Product=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
    cost:new FormControl("",[Validators.required])
  })
  ngOnInit(): void {
  }
  onSubmit(){
    this.productService.addProduct([this.Product.value.name,this.Product.value.cost]).subscribe()
    this.router.navigateByUrl("product")
  }
  get Name():FormControl{
    return this.Product.get("name") as FormControl
  }
  get Cost():FormControl{
    return this.Product.get("cost") as FormControl
  }
}
