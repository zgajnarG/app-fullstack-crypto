import { createReducer, on } from '@ngrx/store';
import { Wallet } from 'src/app/models/wallet';
import { saveWallet } from './wallet.actions';

export const initialState: Wallet = {};

export const walletReducer = createReducer(
  initialState,
  on(saveWallet, (state, wallet: Wallet) => {
    return wallet;
  })
);
