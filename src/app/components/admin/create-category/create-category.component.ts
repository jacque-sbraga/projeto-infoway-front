import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  originalCategory: Category = {
    category: '',
    featured: false,
  };

  category = {
    ...this.originalCategory
  }

  constructor(private categoryService: CategoryService) {}

  onSubmit(form: NgForm) {    
    console.log(form)

    this.categoryService.create(this.category).subscribe(
      (category) => {
        console.log('Categoria criada com sucesso', category);
        form.resetForm();
      },
      (error) => {
        console.log( error || { error: 'Algum erro aconteceu!' });
      }
    );
  }

  ngOnInit(): void {}

}
