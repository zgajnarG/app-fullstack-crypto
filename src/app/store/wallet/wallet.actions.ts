import { createAction, props } from '@ngrx/store';
import { CryptoTransactionPayload, Wallet } from '../../models/wallet';

export const saveWallet = createAction('Save Wallet', props<Wallet>());

export const buyCrypto = createAction(
  'Buy Crypto',
  props<CryptoTransactionPayload>()
);

export const sellCrypto = createAction(
  'Sell Crypto',
  props<CryptoTransactionPayload>()
);
