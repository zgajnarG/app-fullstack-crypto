import { Component, Input, OnInit } from '@angular/core';
import { Crypto } from '../../models/crypto';

@Component({
  selector: 'crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss'],
})
export class CryptoCardComponent implements OnInit {
  @Input() crypto!: Crypto;

  constructor() {}

  ngOnInit(): void {}
}
