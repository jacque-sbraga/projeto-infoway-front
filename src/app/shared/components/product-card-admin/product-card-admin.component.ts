import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.css']
})
export class ProductCardAdminComponent implements OnInit {

  @Input() product: Product;
  @Output() editButtonPressed: EventEmitter<number> = new EventEmitter();
  @Output() deleteButtonPressed: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  editProduct(): void {
    this.editButtonPressed.emit(this.product.id);    
  }

  deleteProduct(): void {
    this.deleteButtonPressed.emit(this.product.id);
  }
}