import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService) { }
  products:any
  ngOnInit() {
    this.productService.getProduct().subscribe(res=>this.products=res)
  }

}
