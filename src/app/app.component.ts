import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Store } from '@ngrx/store';
import { addCryptos } from 'src/app/store/cryptos/cryptos.actions';
import Crypto from 'src/app/models/crypto';
import { saveWallet } from 'src/app/store/wallet/wallet.actions';
import {
  selectIsAuthenticated,
  selectUserId,
} from 'src/app/store/user/user.selector';
import { Wallet, WalletItem } from 'src/app/models/wallet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private httpService: HttpService, private store: Store) {}

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.httpService.getCryptos().subscribe(
      (data) => {
        this.store.dispatch(addCryptos({ cryptos: data as Crypto[] }));
      },
      (error) => {
        console.log(error);
      }
    );
    this.store.select(selectIsAuthenticated).subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    if (this.isAuthenticated) {
      this.store.select(selectUserId).subscribe((userId) =>
        this.httpService.getWalletById(userId).subscribe((data) => {
          const walletData = data as Wallet;
          this.store.dispatch(saveWallet(walletData));
        })
      );
    }
  }
}
