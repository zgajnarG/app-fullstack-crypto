import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Crypto from "../../../models/crypto";
import { Store } from '@ngrx/store';
import { addCryptos } from 'src/app/store/cryptos/cryptos.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cryptos',
  templateUrl: './all-cryptos.component.html',
  styleUrls: ['./all-cryptos.component.scss']
})
export class AllCryptosComponent implements OnInit {

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
