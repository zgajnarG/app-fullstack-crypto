import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Wallet } from 'src/app/models/wallet';

export const selectWallet = createSelector(
  createFeatureSelector('wallet'),
  (state: Wallet) => {
    return state;
  }
);

export const selectBalance = createSelector(selectWallet, (state: Wallet) => {
  return state.balance;
});
