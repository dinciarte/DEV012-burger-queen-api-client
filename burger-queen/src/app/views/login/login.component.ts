import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ResponseI } from 'src/app/models/response';
import { LoginI } from 'src/app/models/login';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', Validators.required)
  });

  constructor(private api: LoginService, private router: Router,
    // private toastrService: ToastrService
    ) { }

  onLogin() {
    if (this.loginForm.valid) {
      const formData: LoginI = {
        email: this.loginForm.get('email')?.value as string,
        password: this.loginForm.get('password')?.value as string
      };

        this.api.loginForBq(formData).subscribe(
        (response: ResponseI) => {
          console.log('Server response:', response);
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('user', JSON.stringify(response.user));
          //añadir la lógica del router navigate luego de guardar la info de los tokens
          this.router.navigate(['/orders']);
        },
        error => {
          console.error('Error in the request:', error);
          // this.showError('The credentials are wrong!', 'Credential error!');
        }
      );
    } else {
      console.error('Invalid form. Verify the fields.');
    }
  }


//   showError(message: string, title: string): void {
//     this.toastrService.error(message, title);
//   }
}
