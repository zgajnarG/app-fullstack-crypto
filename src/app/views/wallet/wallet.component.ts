import { Component, OnInit, Input } from '@angular/core';
import { Wallet, WalletItem } from '../../models/wallet';
import { DatatableRowProperty } from 'webfullstack-design-system';
import { ModalComponent } from '../../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectUserId } from '../../store/user/user.selector';
import { HttpService } from 'src/app/services/http.service';
import { saveWallet } from 'src/app/store/wallet/wallet.actions';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private httpService: HttpService
  ) {}

  @Input() wallet: WalletItem[] = [];

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

  ngOnInit(): void {
    this.store.select(selectUserId).subscribe((userId) =>
      this.httpService.getWalletById(userId).subscribe((data) => {
        const walletData = data as Wallet;
        this.wallet = walletData.coins as WalletItem[];
        this.store.dispatch(saveWallet(walletData));
      })
    );
  }
}
