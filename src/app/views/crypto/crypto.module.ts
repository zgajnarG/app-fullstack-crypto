import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { WebfullstackDesignSystemModule } from "webfullstack-design-system";
import { AllCryptosComponent } from './all-cryptos/all-cryptos.component';
import { CryptoComponentsModule } from "../../components/crypto/crypto-components.module";
import { CryptoDetailComponent } from "./crypto-detail/crypto-detail.component";

const routes: Routes = [
  {
    path: '',
    component: AllCryptosComponent
  },
  {
    path: ':id',
    component: CryptoDetailComponent
  },
];

@NgModule({
  declarations: [AllCryptosComponent, CryptoDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebfullstackDesignSystemModule,
    CryptoComponentsModule
  ]
})
export class CryptoModule { }
