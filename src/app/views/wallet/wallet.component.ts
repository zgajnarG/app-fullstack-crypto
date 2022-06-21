import { Component, OnInit, Input } from '@angular/core';
import { Wallet, WalletItem } from '../../models/wallet';
import {
  DatatableRowProperty,
  DatatableHeader,
} from 'webfullstack-design-system';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectWallet } from 'src/app/store/wallet/wallet.selector';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}

  @Input() wallet: Wallet = {};
  headers: DatatableHeader[] = [
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

  get data() {
    return (this.wallet.coins || []).map((coin) =>
      Object.keys(coin).map((key) => ({
        headerName: key,
        value: coin[key as keyof WalletItem],
      }))
    ) as DatatableRowProperty[][];
  }

  openDialog(action: string) {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        balance: this.wallet.balance,
        userId: this.wallet.userId,
        action,
      },
    });
  }

  ngOnInit(): void {
    this.store.select(selectWallet).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }
}
