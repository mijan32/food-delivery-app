import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import{HttpClientModule} from'@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SelectFoodComponent } from './pages/select-food/select-food.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    CreateOrderComponent,
    RestaurantItemsComponent,
    SelectFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
