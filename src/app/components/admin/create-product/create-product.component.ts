import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { ModalInformation } from 'src/app/models/modalInformation.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  originalProduct: Product = {
    name: '',
    description: '',
    quantity: 0,
    price: 0.0,
    sku: '',
    image: '',
    available: true,
    featured: false,
    category_id: null,
  };

  product: Product;
  postError: boolean;
  postErrorMessage: string;
  categorys: Category[] = [];

  // Caso esteja editando um produto
  productIdFromRoute: number;
  isEditing: boolean = false;

  // Informações do diálogo de sucesso
  dialogDataSuccess: ModalInformation = {    
    title: 'Sucesso!',
    text: 'Operação concluída com sucesso.',
    hasButtonConfim: true,
    buttonConfirmText: 'Ver lista de produtos',
    buttonCloseText: 'Cadastrar novo produto'      
  }

  // Diálogo de erro
  dialogDataError: ModalInformation = {    
    title: 'Erro: não foi possível cadastrar o produto',
    text: 'Verifique se o nome ou o SKU já estão cadastrados, e se todos os dados estão corretamente preenchidos.',
    hasButtonConfim: false,    
    buttonCloseText: 'Fechar'      
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getCategoriesService: CategoryService,
    private productService: ProductService,
    public confirmDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCategoriesService.getAll().subscribe(
      (categories) => {
        this.categorys = categories;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.getProductFromRoute();
  }

  getProductFromRoute(): void {
    this.productIdFromRoute = this.activatedRoute.snapshot.params['id'];
    
    // Significa que está editando um produto
    if(this.productIdFromRoute) {
      this.isEditing = true;
      this.productService.findOne(this.productIdFromRoute)
        .subscribe((product: Product) => {
          this.product = product;
        });
    }
    // Se não receber o id, está criando um novo
    else {
      this.isEditing = false;
      this.product = { ...this.originalProduct };      
    }    
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.valid);
    if (form.valid) {
      // Verifica se está editando um produto já existente
      if (this.isEditing) {
        this.productService.update(this.product.id, this.product).subscribe(
          (result) => {
            console.log('Produto atualizado com sucesso', result);
            this.openDialogSuccess(form);
          },
          (error) => {
            this.onHttpError(error);
            this.openDialogError();
          }          
        );
      }
      // Senão, cria um novo no banco de dados
      else {        
        this.productService.create(this.product).subscribe(
          (result) => {
            console.log('Produto criado com sucesso', result);
            this.openDialogSuccess(form);
          },
          (error) => {
            this.onHttpError(error);
            this.openDialogError();
          }
        );
      }
    } else {
      this.postError = true;
      this.postErrorMessage =
        'Por favor, preencha corretamente os campos em vermelho!';
    }
  }

  onHttpError(error: any) {
    console.log('Error: ', error);
    (this.postError = true), (this.postErrorMessage = error.error.errorMessage);
  }


 // Modal de feedback
  openDialogSuccess(form: NgForm): void {
    const dialogRef = this.confirmDialog.open(ModalAlertComponent, {
      width: '500px', data: this.dialogDataSuccess
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Ir para a lista de produtos do admin
        this.router.navigate(['admin-dashboard', 'product-list']);
      }
      else {
        // Cadastrar novo produto. Limpa o form        
        form.resetForm();
        this.product = { ...this.originalProduct };        
      }
    });    
  }

  openDialogError(): void {
    const dialogRef = this.confirmDialog.open(ModalAlertComponent, {
      width: '500px', data: this.dialogDataError 
    });
  }

}
