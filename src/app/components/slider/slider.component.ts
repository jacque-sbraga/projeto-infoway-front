import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  sliders: any = [
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/v2/MSCJO365LPER00/MSCJO365LPER00_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IP_Perifericos/EPL6171PTO/V2/EPL6171PTO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/EPC11CJ183BCO/EPC11CJ183BCO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/Marketplace/6869173306/6869173306_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS//Marketplace/6869179311/6869179311_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/v2/MSCJO365LPER00/MSCJO365LPER00_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IP_Perifericos/EPL6171PTO/V2/EPL6171PTO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/EPC11CJ183BCO/EPC11CJ183BCO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/Marketplace/6869173306/6869173306_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS//Marketplace/6869179311/6869179311_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/v2/MSCJO365LPER00/MSCJO365LPER00_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IP_Perifericos/EPL6171PTO/V2/EPL6171PTO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/EPC11CJ183BCO/EPC11CJ183BCO_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/Marketplace/6869173306/6869173306_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS//Marketplace/6869179311/6869179311_PRD_160_1.jpg',
    'https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_IN_Informatica/v2/MSCJO365LPER00/MSCJO365LPER00_PRD_160_1.jpg',
  ];

  ngOnInit(): void {}
}
