import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './views/orders/orders.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
