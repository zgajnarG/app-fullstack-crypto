import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Crypto from "../../../models/crypto";

@Component({
  selector: 'crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss'],
})
export class CryptoCardComponent implements OnInit {
  @Input() crypto!: Crypto;
  @Input() width = '30rem';
  @Input() height = '10rem';
  @Output() clickLineEvent = new EventEmitter<Crypto>();
  constructor() {}

  ngOnInit(): void {}

  clickLine(): void {
    this.clickLineEvent.emit(this.crypto);
  }


}
