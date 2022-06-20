import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { reducers } from './store';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebfullstackDesignSystemModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot(reducers),
  ],
  exports: [WebfullstackDesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
