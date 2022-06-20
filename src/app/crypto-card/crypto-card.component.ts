import { Component, Input, OnInit } from '@angular/core';
import { Crypto } from '../crypto';

@Component({
  selector: 'crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss'],
})
export class CryptoCardComponent implements OnInit {
  @Input() crypto: Crypto | undefined = {
    id: 1,
    name: 'Bitcoin',
    eur_price: 29530.8,
    img: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
    abbreviation: 'BTC',
  };

  constructor() {}

  ngOnInit(): void {}
}
