import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebfullstackDesignSystemModule } from "webfullstack-design-system";
import {CryptoCardComponent} from "./crypto-card/crypto-card.component";
import {CryptoListComponent} from "./crypto-list/crypto-list.component";

const COMPONENTS = [CryptoListComponent, CryptoCardComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    WebfullstackDesignSystemModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CryptoComponentModule { }
