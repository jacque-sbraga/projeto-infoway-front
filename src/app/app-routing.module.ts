import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './buyer/components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './buyer/components/product-details/product-details.component';
import { ProductListComponent } from './buyer/components/product-list/product-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},  
  {path: 'home/login-admin', component: LoginComponent},
  {path: 'products',   
    children: [
      {
        path: '',
        component: ProductListComponent
      },      
      {
        path: ':id',
        component: ProductDetailsComponent,
        pathMatch: 'full'
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
