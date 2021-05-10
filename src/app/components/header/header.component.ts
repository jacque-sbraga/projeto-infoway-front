import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { CategoryService } from 'src/app/services/category.service';

import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemsMenu: any = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  
  itemsLoginMenu: any = ["Login 1", "Login 2", "Login 3", "Login 4", "Login 5"];

  openedMenu: boolean = false;
  openedLogin: boolean = false;

  // constructor() {}

  // ngOnInit(): void {}

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
    this.closeLogin()
  }

  closeMenu() {
    this.openedMenu = false;
  }

  toggleLogin() {
    console.log("clicou")
    this.openedLogin = !this.openedLogin;
    this.closeMenu()
  }

  closeLogin() {
    this.openedLogin = false;
  }

  categories: Category[] = [];
  featuredCategories: Category[] = [];

  searchFormGroup: FormGroup;
  searchText: string = '';
  searchTextNotFound: string = '';
  foundProducts: Product[] = [];

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.formConfig();
    this.findProducts();
  }

  getCategories(): void {
    this._categoryService.getAll().subscribe(
      response => {
        this.categories = response;
        this.featuredCategories = this.categories.filter(category => category.featured);
      },
      error => console.log(error)
    );
  }

  navigateToProductList(selectedCategory: Category): void {
    this._router.navigate(['products'], { queryParams: { category: selectedCategory.id }, skipLocationChange: true });
  }

  navigateToSelectedProduct(id: number): void {
    this.clearSearch();    
    this._router.navigateByUrl('/products/' + id);    
  }

  formConfig(): void {
    this.searchFormGroup = this._formBuilder.group({
      searchInput: ['']      
    });
  }

  findProducts(): void {
    this.searchFormGroup.get('searchInput').valueChanges    
    .pipe(debounceTime(400))
      .subscribe((value: string) => {        
        if (!value || value.trim().length == 0) {          
          this.clearSearch();
        }        
        else {
          this.searchText = value;
          this.getProductsByName();          
        }
    });
  }

  getProductsByName(): void {    
    this._productService.getAllByKeyValue(`name`, this.searchText, false).subscribe(
      response => {
        this.foundProducts = response;
        this.searchTextNotFound = '';
      },
      error => {
        console.log(error);
        this.searchTextNotFound = 'Nenhum produto encontrado';
      });
  }
  
  clearSearch(): void {
    this.searchFormGroup.get('searchInput').reset();
    this.searchText = '';
    this.searchTextNotFound = '';
    this.foundProducts = [];
  }
}
