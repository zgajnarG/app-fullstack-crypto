import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {WebfullstackDesignSystemModule} from 'webfullstack-design-system';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebfullstackDesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
