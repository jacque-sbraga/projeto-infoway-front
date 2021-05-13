import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.css']
})
export class ProductCardAdminComponent implements OnInit {

  @Input() product: Product;
  @Output() editButtonPressed: EventEmitter<number> = new EventEmitter();
  @Output() deleteButtonPressed: EventEmitter<number> = new EventEmitter();

  constructor(public confirmDialog: MatDialog) { }

  ngOnInit(): void {
  }

  editProduct(): void {
    this.editButtonPressed.emit(this.product.id);    
  }

  openDialog(): void {
    const dialogRef = this.confirmDialog.open(ModalAlertComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteButtonPressed.emit(this.product.id);
      // console.log(`Dialog result: ${result}`);
      // this.animal = result;
    });    
  }
}