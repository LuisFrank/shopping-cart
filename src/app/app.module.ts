import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/shopping-cart/single-product/single-product.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { CartDetailComponent } from './components/shopping-cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    BreadcrumbComponent,
    HomeComponent,
    SingleProductComponent,
    ModalComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:() => {
          return localStorage.getItem('access_token')
        },
        allowedDomains: ['localhost'],
        disallowedRoutes: ['localhost/auth/login']
      }
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
