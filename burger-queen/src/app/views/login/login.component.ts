import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ApiService } from 'src/app/services/api.service';
import { ResponseI } from 'src/app/models/response';
import { LoginI } from 'src/app/models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', Validators.required)
  })


  //esta variable hace que se conecten los valores iniciales del formulario y que me pida validaciones obligatorias para poder pasar a la autenticación
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', Validators.required)
  })

  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.loginForm.value);
    

    



    // this.api.loginForBq(form).subscribe(data => {
    //   console.log(data);
    // })
  }

}