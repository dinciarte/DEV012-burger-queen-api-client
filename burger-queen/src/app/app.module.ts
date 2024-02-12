import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/solo/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { OrdersComponent } from './views/orders/orders.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { ReadyComponent } from './views/ready/ready.component';
import { AdminComponent } from './views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OrdersComponent,
    KitchenComponent,
    ReadyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
