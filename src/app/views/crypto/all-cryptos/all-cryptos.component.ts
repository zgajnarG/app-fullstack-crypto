import { Component, OnInit } from '@angular/core';
import { Crypto } from "../../../models/crypto";

@Component({
  selector: 'app-all-cryptos',
  templateUrl: './all-cryptos.component.html',
  styleUrls: ['./all-cryptos.component.scss']
})
export class AllCryptosComponent implements OnInit {

  allCryptos: Crypto [] = [];

  constructor() { }

  ngOnInit(): void {
    this.allCryptos = [{
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
