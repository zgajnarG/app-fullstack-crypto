import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {WebfullstackDesignSystemModule} from "webfullstack-design-system";
import {CryptoComponentsModule} from "../../components/crypto/crypto-components.module";

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
    CryptoComponentsModule
  ]
})
export class HomeModule { }
