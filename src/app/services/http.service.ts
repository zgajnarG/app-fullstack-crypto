import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserRegister } from '../models/user';
import { Wallet } from '../models/wallet';
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

  public getWalletById(userId: number): Observable<Object> {
    return this.httpClient.get(environment.apiUrl + 'wallet?userId=' + userId);
  }

  public putWallet(userId: number, wallet: Wallet): Observable<Object> {
    return this.httpClient.put(
      environment.apiUrl + 'wallet?userId=' + userId,
      wallet
    );
  }
}
