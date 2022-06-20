import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';
import { CryptoCardComponent } from './crypto-card/crypto-card.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';

const COMPONENTS = [CryptoCardComponent];

@NgModule({
  declarations: [...COMPONENTS, AppComponent, CryptoDetailComponent],
  imports: [BrowserModule, AppRoutingModule, WebfullstackDesignSystemModule],
  exports: [...COMPONENTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
