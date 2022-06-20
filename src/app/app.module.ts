import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {WebfullstackDesignSystemModule} from 'webfullstack-design-system';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebfullstackDesignSystemModule,
    StoreModule.forRoot({ users : userReducer}),
  ],
  exports : [WebfullstackDesignSystemModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
