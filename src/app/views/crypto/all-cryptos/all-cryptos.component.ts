import { Component, OnInit } from '@angular/core';
import Crypto from '../../../models/crypto';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';
import {Subject, takeUntil} from "rxjs";
@Component({
  selector: 'app-all-cryptos',
  templateUrl: './all-cryptos.component.html',
  styleUrls: ['./all-cryptos.component.scss'],
})
export class AllCryptosComponent implements OnInit {
  cryptos: Crypto[] = [];
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectAll()).pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.cryptos = data as Crypto[];
    });
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
