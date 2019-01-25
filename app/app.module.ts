import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductComponent } from './FinalPro/product/product.component';
import { ProductsComponent } from './FinalPro/products/products.component';
import { ProductFormComponent } from './FinalPro/product-form/product-form.component';
import {HttpClientModule} from '@angular/common/http';
  


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,ReactiveFormsModule,
    RouterModule,
    ImageCropperModule,
    HttpClientModule
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
