import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartDetailComponent } from './components/shopping-cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { PaymentComponent } from './components/shopping-cart/payment/payment.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SingleProductComponent } from './components/shopping-cart/single-product/single-product.component';
import { ThankyouComponent } from './components/shopping-cart/thankyou/thankyou.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  }, 
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'shop', component: ShoppingCartComponent, data: { breadcrumb: 'Tienda' }},
  { path: 'home', component: HomeComponent },
  { path: 'single-product/:id', component: SingleProductComponent, data: { breadcrumb: 'Producto' } },  
  { path: 'cart-detail', component: CartDetailComponent, data: { breadcrumb: 'Detalle Carro'  }},  
  { path: 'checkout', component: CheckoutComponent },  
  { path: 'payment', component: PaymentComponent },  
  { path: 'thankyou', component: ThankyouComponent },  
  { path: '**', component: PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
