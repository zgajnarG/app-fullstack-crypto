import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Crypto from '../../../models/crypto';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';
@Component({
  selector: 'app-all-cryptos',
  templateUrl: './all-cryptos.component.html',
  styleUrls: ['./all-cryptos.component.scss'],
})
export class AllCryptosComponent implements OnInit {
  cryptos: Crypto[] = [];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectAll()).subscribe((data) => {
      this.cryptos = data as Crypto[];
    });
  }

  handleClickLine(event: Crypto) {
    this.router.navigate([`/crypto/${event.id}`]);
  }
}
