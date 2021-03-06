import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductQuery } from 'src/app/models/productQuery.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ModalInformation } from 'src/app/models/modalInformation.model';
import { ModalAlertComponent } from '../../components/modal-alert/modal-alert.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  provider: boolean = false;
  
  // Para saber em qual rota o user/admin está
  currentRouteAdmin: boolean = false;

  products: Product[] = [];

  // Menu de filtro
  categoriesChecked: any = [];
  available: boolean = false;
  featured: boolean = false;
  nameFilter: string = '';

  messageText: string = '';

  // Forms com os selects (ordenação e categoria)
  formSort: FormGroup;

  // Informações do diálogo para confirmar exclusão
  dialogData: ModalInformation = {    
    title: 'Confirmar',
    text: 'Você realmente gostaria de excluir este produto?',
    hasButtonConfim: true,
    buttonConfirmText: 'Confirmar',
    buttonCloseText: 'Cancelar'      
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _getTokenService: TokenStorageService,
    public confirmDialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Obtém qual a rota em que o user está    
    const currentRoute = this._router.url;
    currentRoute.indexOf('admin-dashboard') == 1 ? this.currentRouteAdmin = true : this.currentRouteAdmin = false;    

    this.formConfig();
    this.getAllCategories();
    this.getCategoryFromRoute();
    this.provider = this._getTokenService.getUser().roles === 'ROLE_ADMIN' ? true : false;        
  }

  getCategoryFromRoute(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      this.products = [];
      let categoryIdFromRoute = 0;      

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
  // Métodos dos botões Editar e Excluir do Child
  //************************************************************************* */
  editButtonPressedHandler(productId: number) {
    if (this.provider) {
      this._router.navigateByUrl('/admin-dashboard/create-product/' + productId);
    }
    else {
      console.log('Você deve estar logado como administrador!');
    }
  }

  deleteItem(productId: number) {    
    if (this.provider) {
      // Exclui o produto
      this._productService.delete(productId).subscribe(
        response => {
          console.log('Produto excluído com sucesso', response);          
          // Remove o produto da lista de produtos carregada
          this.products.splice(this.products.indexOf(response), 1);
        },
      error => console.error()
      );
    }
    else {
      console.log('Você deve estar logado como administrador!');
    }    
  }

  
  // Modal de confirmação  
  openDialog(productId: number): void {
    const dialogRef = this.confirmDialog.open(ModalAlertComponent, {
      width: '250px', data: this.dialogData 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem(productId);
      }
    });    
  }

  //************************************************************************* */
  // Métodos do menu de filtrar itens
  //************************************************************************* */
  applyFilter(): void {
    this.products = [];
    let filter = new ProductQuery();

    // Verifica se há palavra-chave na busca
    if (this.nameFilter && this.nameFilter.trim().length > 0) {
      filter.name = this.nameFilter;
    }

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

  onCategoryChange(): void {
    let selectedFilter = this.formSort.get('selectCategory').value;    
    if (!selectedFilter || selectedFilter == 0) {
      this.categoriesChecked.forEach((element: any) => {
        element.isChecked = true;
      });
    }
    else {
      this.categoriesChecked.forEach((element: any) => {
        element.category.id == selectedFilter ? element.isChecked = true : element.isChecked = false;
      });
    }    
  }

  formConfig(): void {
    this.formSort = this._formBuilder.group({
      selectFilter: new FormControl(),
      selectCategory: new FormControl(),      
    });
  }  
}
