import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreAddressComponent } from './store-address/store-address.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    StoreListComponent,
    StoreDetailsComponent,
    StoreAddressComponent,
    StoreFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
