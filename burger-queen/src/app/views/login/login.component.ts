import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ApiService } from 'src/app/services/api.service';
import { ResponseI } from 'src/app/models/response';
import { LoginI } from 'src/app/models/login';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', Validators.required)
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  // public showError(): void {
  //   this.toastrService.error( 'The credentials are wrong!', 'Credential error!');
  // };     

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
        },
        error => {
          console.error('Error in the request:', error);
          // this.showError()
        }
      );
    } else {
      console.error('Invalid form. Verfy the fields.');
    }
  }
}