import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {WebfullstackDesignSystemModule} from 'webfullstack-design-system';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from "./components/header/header.component";
import { reducers } from './store';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebfullstackDesignSystemModule,
    StoreModule.forRoot(reducers),
  ],
  exports : [WebfullstackDesignSystemModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
