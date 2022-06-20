import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Crypto from 'src/app/models/crypto';
import { Store } from '@ngrx/store';
import { addCryptos } from 'src/app/store/cryptos/cryptos.actions';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  cryptos : Crypto[] = [];

  constructor(private httpService : HttpService , private store : Store , private router: Router ) { }

  ngOnInit(): void {

    this.httpService.getCryptos().subscribe((data) => {
      this.cryptos = data as Crypto[];
      this.store.dispatch(addCryptos({cryptos : this.cryptos}));
    }, (error) => {
      console.log(error);
    });
  }

  handleClickLine(event :Crypto){
    this.router.navigate([`/crypto/${event.id}`]);
  }

}
