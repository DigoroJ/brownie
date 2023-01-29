import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { 
  AuthGuardService
} from './services/auth-guard.service';
const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: "shop", component: ProductsComponent},
  {path: "proceed", component: ProceedComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "listproducts", component: ListProductsComponent},
  {path: "productdescription", component: ProductDescriptionComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "home", component: LandingPageComponent}
  //{ path: "", component: ProductsComponent, canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
