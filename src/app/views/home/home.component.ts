import { Component, OnInit } from '@angular/core';
import Crypto from '../../models/crypto';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Store } from '@ngrx/store';
import { selectBalance } from 'src/app/store/wallet/wallet.selector';
import { selectUserId } from 'src/app/store/user/user.selector';
import { saveWallet } from 'src/app/store/wallet/wallet.actions';
import { Wallet } from 'src/app/models/wallet';
import { concatMap, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favoriteCryptos: Crypto[] = [];
  randomCryptos: Crypto[] = [];
  balance: Number | undefined = 0;
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private httpService: HttpService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(selectBalance).pipe(takeUntil(this.destroyed$)).subscribe((balance) => {
      this.balance = balance;
    });
    this.httpService.getCryptos().pipe(takeUntil(this.destroyed$)).subscribe(
      (data) => {
        const cryptos = data as Crypto[];
        this.randomCryptos = cryptos;
        this.favoriteCryptos = cryptos.slice(2, 8).reverse();
      },
      (error) => {
        console.log(error);
      }
    );
    if (this.balance === 0) {
      this.store.select(selectUserId).pipe(concatMap((userId: number)=> this.httpService.getWalletById(userId).pipe(takeUntil(this.destroyed$))), takeUntil(this.destroyed$)).subscribe((data) => {
          const walletData = data as Wallet[];
          if (walletData.length > 0) {
            this.store.dispatch(saveWallet(walletData[0]));
          }
      });
    }
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
