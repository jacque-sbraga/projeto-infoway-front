import { Component, OnChanges, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MaterialModule } from 'src/app/shared/angular-material/material.module';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  category: number;
  products: Product[] = [];

  messageText: string = `Exibindo todos os produtos (${this.products.length} produtos encontrados)`;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategoryFromRoute();
  }  

  getCategoryFromRoute(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if(params.hasOwnProperty('category'))
        { 
          this.category = params['category'] as number;
          this.getProductsByCategory();
        }
    });  
  }

  getProductsByCategory(): void {    
    this.productService.getAllByKeyValue(`category_id`, this.category, true).subscribe(
      response => {
        this.products = response;        
      },
      error => {
        console.log(error);
      });
  }
}