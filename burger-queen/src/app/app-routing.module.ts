import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './views/orders/orders.component';
import { LoginComponent } from './views/login/login.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { ReadyComponent } from './views/ready/ready.component';
import { AdminComponent } from './views/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'kitchen', component: KitchenComponent, canActivate: [AuthGuard] },
  { path: 'ready', component: ReadyComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent } // for the 404 thingy
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
