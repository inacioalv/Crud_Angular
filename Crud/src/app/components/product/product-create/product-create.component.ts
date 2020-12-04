import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product ={
      name:"",
      price:null
  }

  constructor(private procuctService:ProductService,
                     private router:Router ) { }

  ngOnInit(): void {
  }

  createProduct():void{
    this.procuctService.create(this.product).subscribe(()=>{
      this.procuctService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    })
  }
  cancel():void{
      this.router.navigate(['/products'])
  }


}
