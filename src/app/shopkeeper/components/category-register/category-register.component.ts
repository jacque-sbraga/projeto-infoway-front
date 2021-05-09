import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-register',
  templateUrl: './category-register.component.html',
  styleUrls: ['./category-register.component.css']
})
export class CategoryRegisterComponent implements OnInit {

  categories?: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.categoryService.create({ category: 'testando' }).subscribe(response => console.log(`Criando categoria: ${response}`));
    
    // this.categoryService.update('update', { category: 'updateagain' }).subscribe(response => console.log(`\nAtualizando categoria: ${response}`), error => console.log(`n'ao foi =(`));
    
    // this.categoryService.findOne('testando api').subscribe(response => console.log(`\nBuscando categoria: ${response}`));

    // this.categoryService.getAll().subscribe(
    //   response => {
    //     this.categories = response;
    //     console.log(`\nBuscando todas categorias: ${this.categories}`);
    //   },
    //   error => {
    //     console.log(error);
    //   });
        
    // this.categoryService.delete('testando').subscribe(response => console.log(`\nApagando categoria: ${response}`));    
    // this.categoryService.deleteAll().subscribe(response => console.log(`\nApagando todas as categorias: ${response}`));
  }

}
