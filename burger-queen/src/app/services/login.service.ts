import { Injectable } from '@angular/core';
import { LoginI } from '../models/login';
import { ResponseI } from '../models/response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  private mockApiUrl = 'http://localhost:8080';

  loginForBq(form: LoginI):Observable<ResponseI>{
    let address = this.mockApiUrl + '/login';
    return this.http.post<ResponseI>(address, form)
  }

}

