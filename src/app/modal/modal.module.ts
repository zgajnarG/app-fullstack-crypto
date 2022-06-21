import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { WebfullstackDesignSystemModule } from 'webfullstack-design-system';

const COMPONENTS = [ModalComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebfullstackDesignSystemModule,
  ],
  exports: [...COMPONENTS],
})
export class ModalModule {}
