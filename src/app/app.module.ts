import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebfullstackDesignSystemModule } from "webfullstack-design-system";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, WebfullstackDesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
