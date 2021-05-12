import { Component, OnChanges, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductQuery } from 'src/app/models/productQuery.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  private provider = '';

  products: Product[] = [];

  // Menu lateral
  categoriesChecked: any = [];
  available: boolean = false;
  featured: boolean = false;

  messageText: string = '';

  // Select de ordenação
  formSort: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _getTokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.formConfig();
    this.getAllCategories();
    this.getCategoryFromRoute();
    this.provider = this._getTokenService.getUser().roles;
    console.log(this.provider);
  }

  getCategoryFromRoute(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      this.products = [];
      let categoryIdFromRoute = 0;
      this.products = [];

      if (params.hasOwnProperty('category')) {
        categoryIdFromRoute = params['category'] as number;

        for (let item of this.categoriesChecked) {
          if (item.category.id == categoryIdFromRoute) {
            item.isChecked = true;
          } else {
            item.isChecked = false;
          }
        }
      }
      this.getAllProducts({ category_id: categoryIdFromRoute });
    });
  }

  getAllCategories(): void {
    this._categoryService.getAll().subscribe(
      (response) => {
        response.forEach((category) => {
          this.categoriesChecked.push({ category: category, isChecked: false });
        });
      },
      (error) => console.log(error)
    );
  }

  getAllProducts(filter: ProductQuery): void {
    this._productService.getAllByParams(filter).subscribe(
      (response) => {
        this.products.push(...response);
        this.messageText = `${this.products.length} produtos encontrados`;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //************************************************************************* */
  // Métodos do menu de filtrar itens
  //************************************************************************* */
  applyFilter(): void {
    this.products = [];
    let filter = new ProductQuery();

    // Define os filtros
    if (this.available) {
      filter.available = true;
    }

    if (this.featured) {
      filter.featured = true;
    }

    //Checa se há alguma categoria selecionada
    if (this.categoriesChecked.some((category: any) => category.isChecked)) {
      // Obtém os produtos das categorias selecionadas já com os filtros aplicados
      for (const category of this.categoriesChecked) {
        if (category.isChecked) {
          filter.category_id = category.category.id;
          this.getAllProducts(filter);
        }
      }
    }
    // Se não houver nenhuma, busca todos os produtos
    else {
      this.getAllProducts(filter);
    }

    this.messageText = `${this.products.length} produtos encontrados`;
  }

  //************************************************************************* */
  // Métodos do menu de ordenar itens
  //************************************************************************* */
  sortByName(): void {
    this.products.sort((a: Product, b: Product) =>
      a.name.localeCompare(b.name)
    );
  }

  sortByLowestPrice(): void {
    this.products.sort((a: Product, b: Product) => a.price - b.price);
  }

  sortByHighestPrice(): void {
    this.products.sort((a: Product, b: Product) => b.price - a.price);
  }

  formConfig(): void {
    this.formSort = this._formBuilder.group({
      selectFilter: new FormControl(),
    });
  }

  onSortChange(): void {
    let selectedFilter = this.formSort.get('selectFilter').value;

    switch (selectedFilter) {
      case 'name':
        this.sortByName();
        break;
      case 'priceLowest':
        this.sortByLowestPrice();
        break;
      case 'priceHighest':
        this.sortByHighestPrice();
        break;
    }
  }
}
