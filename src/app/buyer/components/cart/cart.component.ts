import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter: number = 1;
  
  setCounterPlus() {
    this.counter += 1
  }

  setCounterMinus() {
    if (this.counter > 1) {
      this.counter -= 1
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
