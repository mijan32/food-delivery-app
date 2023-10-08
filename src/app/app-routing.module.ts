import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';

const routes: Routes = [
  {
    path:'Login',
  component:LoginComponent
  },
  {
    path:'foodCategory',
    component:CategoriesComponent
  },
  {
  path:'restaurant-items/:categoryname',
  component:RestaurantItemsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
