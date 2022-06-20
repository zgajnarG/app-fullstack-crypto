import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Store } from '@ngrx/store';
import { addCryptos } from 'src/app/store/cryptos/cryptos.actions';
import Crypto from 'src/app/models/crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private httpService: HttpService, private store: Store) {}

  ngOnInit(): void {
    this.httpService.getCryptos().subscribe(
      (data) => {
        this.store.dispatch(addCryptos({ cryptos: data as Crypto[] }));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
