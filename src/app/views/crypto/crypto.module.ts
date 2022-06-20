import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { CryptoCardComponent } from "./components/crypto-card/crypto-card.component";
import { CryptoDetailComponent } from "./crypto-detail/crypto-detail.component";
import { WebfullstackDesignSystemModule } from "webfullstack-design-system";
import { CryptoListComponent } from './crypto-list/crypto-list.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoListComponent
  },
  {
    path: ':id',
    component: CryptoDetailComponent
  },
];

@NgModule({
  declarations: [CryptoCardComponent, CryptoDetailComponent, CryptoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebfullstackDesignSystemModule
  ]
})
export class CryptoModule { }
