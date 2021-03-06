import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { addCrypto } from 'src/app/store/cryptos/cryptos.actions';
import { selectOneById } from 'src/app/store/cryptos/cryptos.selector';
import Crypto from "../../../models/crypto";
import DataChart from 'webfullstack-design-system/lib/chart/chart.interface';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.scss']
})
export class CryptoDetailComponent implements OnInit {

  currentCrypto!: Crypto;
  data : DataChart[]=[{
    color : "red",
    data: [
      {
        x: 0,
        y: 0
      }, {
          x: 20,
          y: 10
      }, {
          x: 40,
          y: 15
      }, {
          x: 60,
          y: 40
      }, {
          x: 80,
          y: 60
      }, {
          x: 100,
          y: 50
      }, {
          x: 120,
          y: 85
      }, {
          x: 140,
          y: 100
      }
    ]
  }
];
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute,private store : Store , private httpService : HttpService , private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      this.store.select(selectOneById(params['id'])).pipe(takeUntil(this.destroyed$)).subscribe(data => {
        const listData = data as Crypto[];
        if(data.length == 0){
          this.httpService.getCryptoById(params['id']).pipe(takeUntil(this.destroyed$)).subscribe(dataHttp => {
            const listDataHttp = dataHttp as Crypto[];
            if(listDataHttp.length > 0){
              this.currentCrypto = listDataHttp[0];
              this.store.dispatch(addCrypto(this.currentCrypto));
            }else{
              console.log('No data');
            }
          });
        }else{
          this.currentCrypto = listData[0];
        }
      });
    });
  }

  clickReturn(){
    this.router.navigate(['/crypto']);
  }

  clickBuy(){
    this.router.navigate(['/wallet']);
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
