import {Component, Input, OnInit} from '@angular/core';
import { Crypto } from "../../../models/crypto";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  @Input() cryptos: Crypto[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
