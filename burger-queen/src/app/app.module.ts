import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { OrdersComponent } from './views/orders/orders.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { ReadyComponent } from './views/ready/ready.component';
import { AdminComponent } from './views/admin/admin.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InputsComponent } from './components/solo/inputs/inputs.component';
import { LoginviewComponent } from './views/loginview/loginview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    KitchenComponent,
    ReadyComponent,
    AdminComponent,
    FooterComponent,
    InputsComponent,
    LoginviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
