import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {WebfullstackDesignSystemModule} from "webfullstack-design-system";
import {CryptoComponentModule} from "../../components/crypto/crypto-component.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebfullstackDesignSystemModule,
    CryptoComponentModule
  ]
})
export class HomeModule { }
