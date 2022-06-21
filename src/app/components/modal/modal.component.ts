import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Crypto } from '../../views/crypto/models/crypto';
import { Store } from '@ngrx/store';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';
import { buyCrypto, sellCrypto } from 'src/app/store/wallet/wallet.actions';
import { selectCoins } from '../../store/wallet/wallet.selector';
import { WalletItem } from 'src/app/models/wallet';
import { HttpService } from 'src/app/services/http.service';
import {Subject, takeUntil} from "rxjs";
export interface DialogData {
  balance: number;
  userId: number;
  action: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  userId: number | undefined;
  balance: number = 0;
  coins: WalletItem[] = [];
  options: Crypto[] = [];
  selectedCrypto: string = 'Bitcoin';
  amount: number = 0;
  action: string = '';
  toastConfig = {
    color: '',
    message: '',
    open: false,
    duration: 0,
  };
  toastConfigBuyFailure = {
    message: 'Solde insuffisant.',
    color: 'red',
    open: true,
    duration: 0,
  };
  toastConfigSellFailure = {
    message:
      'Vous ne possédez pas cette crypto-monnaie en quantité suffisante.',
    color: 'red',
    duration: 0,
    open: true,
  };
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<ModalComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.store.select(selectAll()).pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.options = data as Crypto[];
      this.selectedCrypto = this.options[0].name;
    });

    this.store.select(selectCoins).pipe(takeUntil(this.destroyed$)).subscribe((coins) => {
      this.coins = coins as WalletItem[];
    });

    this.userId = this.data.userId;
    this.balance = this.data.balance;
    this.action = this.data.action;
  }

  get selectedCryptoObject() {
    return this.options.find(({ name }) => name === this.selectedCrypto);
  }

  get total() {
    return this.selectedCryptoObject
      ? this.selectedCryptoObject.eur_price * this.amount
      : 0;
  }

  get isBuying() {
    return this.action === 'BUY';
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onBuy(): void {
    if (this.amount === 0) {
      this.toastConfig = {
        ...this.toastConfigBuyFailure,
        message: 'Veuillez saisir une quantité valide',
      };
    } else if (this.balance < this.total) {
      this.toastConfig = this.toastConfigBuyFailure;
    } else {
      this.store.dispatch(
        buyCrypto({
          crypto: this.selectedCrypto,
          amount: this.amount,
          price: this.total,
        })
      );
      if (this.userId) {
        this.httpService.putWallet(this.userId, {
          userId: this.userId,
          balance: this.balance - this.total,
          coins: this.coins,
        });
      }
      this.onClose();
    }
  }

  onSell(): void {
    if (!this.amount) {
      this.toastConfig = {
        ...this.toastConfigBuyFailure,
        message: 'Veuillez saisir une quantité valide',
      };
    } else {
      const coinObject = this.coins.find(
        (coin) => coin.crypto === this.selectedCrypto
      );

      if (coinObject && coinObject.amount >= this.amount) {
        this.store.dispatch(
          sellCrypto({
            crypto: this.selectedCrypto,
            amount: this.amount,
            price: this.total,
          })
        );
        if (this.userId) {
          this.httpService.putWallet(this.userId, {
            userId: this.userId,
            balance: this.balance + this.total,
            coins: this.coins,
          });
        }
        this.onClose();
      } else {
        this.toastConfig = this.toastConfigSellFailure;
      }
    }
  }

  onHideToast() {
    this.toastConfig.open = false;
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
