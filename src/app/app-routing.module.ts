import { CheckoutComponent } from './buyer/components/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './buyer/components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './buyer/components/product-details/product-details.component';
import { ProductListComponent } from './shared/views/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { ProductDetailsAdminComponent } from './components/admin/product-details-admin/product-details-admin.component';
import { UserRegisterComponent } from './buyer/components/user-register/user-register.component';
import { CreateCategoryComponent } from './components/admin/create-category/create-category.component';
import { FinishedBuyerComponent } from './buyer/components/finished-buyer/finished-buyer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home/login-admin', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cadastrar', component: UserRegisterComponent },
  { path: 'finished', component: FinishedBuyerComponent},
  {
    path: 'admin-dashboard',
    component: HomeAdminComponent,

    children: [
      { path: '', component: ProductListComponent },
      { path: 'create-product', children: [
        { path: '', component: CreateProductComponent },    
        { path: ':id', component: CreateProductComponent }
      ]}, 
      { path: 'create-category', component: CreateCategoryComponent },     
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-details', component: ProductDetailsAdminComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },      
    ],
  },

  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
