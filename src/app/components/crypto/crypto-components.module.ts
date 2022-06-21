import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebfullstackDesignSystemModule } from "webfullstack-design-system";
import { CryptoCardComponent } from "./crypto-card/crypto-card.component";

const COMPONENTS = [CryptoCardComponent];

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
export class CryptoComponentsModule { }
