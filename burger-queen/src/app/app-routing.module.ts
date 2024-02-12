import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
