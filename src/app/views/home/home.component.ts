import { Component, OnInit } from '@angular/core';
import { Crypto } from "../../models/crypto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  favoriteCryptos: Crypto[] = [];
  randomCryptos: Crypto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.favoriteCryptos = [{
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
    }];

    this.randomCryptos = this.favoriteCryptos;
  }

}
