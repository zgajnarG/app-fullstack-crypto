import { Component, OnInit } from '@angular/core';
import Crypto from '../../models/crypto';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBalance } from 'src/app/store/wallet/wallet.selector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favoriteCryptos: Crypto[] = [];
  randomCryptos: Crypto[] = [];
  balance: Number | undefined = 0;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.favoriteCryptos = [
      {
        id: 1,
        name: 'Bitcoin',
        eur_price: 29530.8,
        image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
        abbreviation: 'BTC',
      },
      {
        id: 2,
        name: 'Bitcoin',
        eur_price: 29530.8,
        image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
        abbreviation: 'BTC',
      },
      {
        id: 3,
        name: 'Bitcoin',
        eur_price: 29530.8,
        image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
        abbreviation: 'BTC',
      },
    ];

    this.randomCryptos = this.favoriteCryptos;
    this.store.select(selectBalance).subscribe((balance) => {
      this.balance = balance;
    });
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }
}
