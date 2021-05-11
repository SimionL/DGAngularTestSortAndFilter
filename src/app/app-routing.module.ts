import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'sales', component: SalesComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}