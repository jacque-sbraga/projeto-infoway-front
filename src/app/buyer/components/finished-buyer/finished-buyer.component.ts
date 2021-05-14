import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished-buyer',
  templateUrl: './finished-buyer.component.html',
  styleUrls: ['./finished-buyer.component.css']
})
export class FinishedBuyerComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  keepShopping(): void {    
    this._router.navigate(['products']);
  }
}
