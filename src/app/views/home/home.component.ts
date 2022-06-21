import { Component, OnInit } from '@angular/core';
import Crypto from '../../models/crypto';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Store } from '@ngrx/store';
import { selectBalance } from 'src/app/store/wallet/wallet.selector';
import { selectUserId } from 'src/app/store/user/user.selector';
import { saveWallet } from 'src/app/store/wallet/wallet.actions';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favoriteCryptos: Crypto[] = [];
  randomCryptos: Crypto[] = [];
  balance: Number | undefined = 0;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.httpService.getCryptos().subscribe(
      (data) => {
        const cryptos = data as Crypto[];
        this.randomCryptos = cryptos;
        this.favoriteCryptos = cryptos.slice(2, 8).reverse();
      },
      (error) => {
        console.log(error);
      }
    );
    this.store.select(selectUserId).subscribe((userId) =>
      this.httpService.getWalletById(userId).subscribe((data) => {
        const walletData = data as Wallet[];
        if (walletData.length > 0) {
          this.store.dispatch(saveWallet(walletData[0]));
        }
      })
    );
    this.store.select(selectBalance).subscribe((balance) => {
      this.balance = balance;
    });
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }
}
