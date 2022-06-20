import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path : 'auth',  loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'crypto', loadChildren: () => import('./views/crypto/crypto.module').then(m => m.CryptoModule)
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
