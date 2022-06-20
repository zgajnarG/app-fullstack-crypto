import { Component, OnInit } from '@angular/core';
import { Crypto } from "../models/crypto";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  cryptos : Crypto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cryptos = [{
      id: 1,
      name: 'Bitcoin',
      eur_price: 29530.8,
      img: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
      abbreviation: 'BTC',
    }, {
      id: 2,
      name: 'Bitcoin',
      eur_price: 29530.8,
      img: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
      abbreviation: 'BTC',
    }, {
      id: 3,
      name: 'Bitcoin',
      eur_price: 29530.8,
      img: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
      abbreviation: 'BTC',
    }]

  }

}
