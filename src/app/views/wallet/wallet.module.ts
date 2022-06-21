import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/components/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
  },
];

@NgModule({
  declarations: [WalletComponent],
  imports: [
    ModalModule,
    CommonModule,
    RouterModule.forChild(routes),
    WebfullstackDesignSystemModule,
    FormsModule,
  ],
})
export class WalletModule {}
