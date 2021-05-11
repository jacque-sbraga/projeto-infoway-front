import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-admin',
  templateUrl: './product-details-admin.component.html',
  styleUrls: ['./product-details-admin.component.css']
})
export class ProductDetailsAdminComponent implements OnInit {

  product: any = {
    name: "Novo Inspiron 15 3000",
    description: "Intel® Pentium® Gold 7505 (2GHz até 3.5GHz, cache de 4MB, dual-core)",
    price: 2799.99,
    quantity: 10,
    sales: 10,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
