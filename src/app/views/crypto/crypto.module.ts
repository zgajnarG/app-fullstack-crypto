import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CryptoCardComponent} from "./crypto-card/crypto-card.component";
import {CryptoDetailComponent} from "./crypto-detail/crypto-detail.component";
import {WebfullstackDesignSystemModule} from "webfullstack-design-system";

const routes: Routes = [
  {
    path: '',
    component: CryptoCardComponent
  },
  {
    path: 'crypto/:id',
    component: CryptoDetailComponent
  },
];

@NgModule({
  declarations: [CryptoCardComponent, CryptoDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebfullstackDesignSystemModule
  ]
})
export class CryptoModule { }
