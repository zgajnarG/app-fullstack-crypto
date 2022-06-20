import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Crypto } from '../views/crypto/models/crypto';
import { Store } from '@ngrx/store';
import { selectAll } from 'src/app/store/cryptos/cryptos.selector';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private store: Store
  ) {}

  options: Crypto[] = [];

  selectedCrypto: Crypto | undefined;
  amount: Number = 0;

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store.select(selectAll()).subscribe((data) => {
      this.options = data as Crypto[];
      this.selectedCrypto = this.options[0];
    });
  }
}
