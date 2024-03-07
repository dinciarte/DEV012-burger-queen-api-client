import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ResponseI } from '../models/response';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const userString: string | null = localStorage.getItem('user');
    console.log(userString, 'userString');
    
    if (!userString) {
      this.router.navigate(['/login']);
      return false;
    }

    const user: ResponseI = JSON.parse(userString);

    if (user && user.user && user.user.role) {
      switch (user.user.role) {
        case 'waiter':
          if (user.user.role === 'waiter') {
            this.router.navigate(['/orders']);
          }
          break;
        case 'chef':
          this.router.navigate(['/kitchen']);
          break;
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        default:
          this.router.navigate(['/login']);
          break;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// import { Injectable } from '@angular/core';import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// @Injectable({  providedIn: 'root'
// })export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate(
//     next: ActivatedRouteSnapshot,    state: RouterStateSnapshot): boolean {
//     if (this.authService.isLoggedIn()) {      return true; // Si el usuario está autenticado, permite la navegación
//     } else {      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
//       this.router.navigate(['/login']);      return false;
//     }  }
// }