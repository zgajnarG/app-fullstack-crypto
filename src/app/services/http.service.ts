import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserRegister } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public loginUser(user: UserRegister): Observable<Object> {
    return this.httpClient.get(
      environment.apiUrl + `user?email=${user.email}&password=${user.password}`
    );
  }

  public registerUser(user: UserRegister): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + 'user', user);
  }

  public getCryptos(): Observable<Object> {
    return this.httpClient.get(environment.apiUrl + 'cryptos');
  }

  public getCryptoById(id: string): Observable<Object> {
    return this.httpClient.get(environment.apiUrl + 'cryptos?id=' + id);
  }
}
