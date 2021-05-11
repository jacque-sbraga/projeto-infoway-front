import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.css'],
})
export class BladeComponent implements OnInit {
  toggle: any = false;

  buttons: any = [
    {
      image: 'src/assets/png/001-system.png',
      message: 'Botão',
    },
  ];

  constructor() {}

  toggleBlade(): void {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {}
}
