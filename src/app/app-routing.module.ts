import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';


const routes: Routes = [{
  path : 'auth',  loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
}];

@NgModule({
  imports: [WebfullstackDesignSystemModule , RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
