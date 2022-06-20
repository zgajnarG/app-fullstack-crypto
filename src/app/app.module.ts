import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';
import { CryptoCardComponent } from './crypto-card/crypto-card.component';
import { WalletComponent } from './wallet/wallet.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [CryptoCardComponent, WalletComponent, ModalComponent];

@NgModule({
  declarations: [...COMPONENTS, AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebfullstackDesignSystemModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [...COMPONENTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
