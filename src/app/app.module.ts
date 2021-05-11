import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSortModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports:[ MatTableModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
