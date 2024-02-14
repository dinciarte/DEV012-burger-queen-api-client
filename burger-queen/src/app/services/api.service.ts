import { Injectable } from '@angular/core';
import { LoginI } from '../models/login';
import { ResponseI } from '../models/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  private mockApiUrl = 'https://burger-queen-api-mock-d84tbmzfy-dinciarte.vercel.app';

  loginForBq(form: LoginI):Observable<ResponseI>{
    let address = this.mockApiUrl + 'auth';
    return this.http.post<ResponseI>(address, form)
  }

}

