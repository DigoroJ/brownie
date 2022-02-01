import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
const routes: Routes = [
  {path: "shop", component: ProductsComponent},
  {path: "login", component: LoginComponent},
  //{path: "register", component: RegisterComponent},
  //{path: "listproducts", component: ListProductsComponent},
  {path: "productdescription", component: ProductDescriptionComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "home", component: LandingPageComponent},
  { 
    path: 'listproducts', 
    component: ListProductsComponent, 
    canActivate: [AuthGuard] 
  },
  {path: '',   redirectTo: '/login', pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
