import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [LoginComponent , RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebfullstackDesignSystemModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
