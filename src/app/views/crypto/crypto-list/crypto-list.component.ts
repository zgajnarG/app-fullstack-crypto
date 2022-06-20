import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Crypto from 'src/app/models/crypto';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';
@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
})
export class CryptoListComponent implements OnInit {
  cryptos: Crypto[] = [];

  constructor(
    private httpService: HttpService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select(selectAll()).subscribe((data) => {
      console.log('data', data);
      this.cryptos = data as Crypto[];
    });
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }
}
