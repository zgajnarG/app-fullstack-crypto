import { Component, OnInit, Input } from '@angular/core';
import { WalletItem } from '../wallet';
import { DatatableRowProperty } from 'webfullstack-design-system';
import { ModalComponent } from '../modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() wallet: WalletItem[] = [
    {
      crypto: 'Bitcoin',
      amount: 20,
    },
    {
      crypto: 'Ethereum',
      amount: 5,
    },
    {
      crypto: 'Tether',
      amount: 6,
    },
  ];

  getHeaders() {
    return [
      {
        label: 'Crypto',
        name: 'crypto',
        order: 1,
      },
      {
        label: 'Quantité',
        name: 'amount',
        order: 2,
      },
    ];
  }

  getData() {
    return this.wallet.map((walletItem) =>
      Object.keys(walletItem).map((key) => ({
        headerName: key,
        value: walletItem[key as keyof WalletItem],
      }))
    ) as DatatableRowProperty[][];
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}
}
