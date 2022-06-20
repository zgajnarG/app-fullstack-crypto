import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crypto } from '../crypto';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  options: Crypto[] = [
    {
      id: 1,
      name: 'Bitcoin',
      eur_price: 29530.8,
      image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
      abbreviation: '',
    },
    {
      id: 2,
      name: 'Ethereum',
      eur_price: 1809.46,
      image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
      abbreviation: '',
    },
    {
      id: 3,
      name: 'Tether',
      eur_price: 0.9317,
      image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png',
      abbreviation: '',
    },
  ];

  selectedCrypto: Crypto = this.options[0];
  amount: Number = 0;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
