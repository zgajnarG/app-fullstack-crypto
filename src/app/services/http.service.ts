import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserRegister } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }



  public loginUser() : Observable<Object> {
    return this.httpClient.get(environment.apiUrl + 'users');
  }

  public registerUser(user : UserRegister) : Observable<Object> {
    return this.httpClient.post(environment.apiUrl + 'users',user);
  }

}
