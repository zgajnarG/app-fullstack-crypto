import { createReducer, on } from '@ngrx/store';
import {
  CryptoTransactionPayload,
  Wallet,
  WalletItem,
} from 'src/app/models/wallet';
import { saveWallet, buyCrypto, sellCrypto } from './wallet.actions';

export const initialState: Wallet = { balance: 0 };

export const walletReducer = createReducer(
  initialState,
  on(saveWallet, (state, wallet: Wallet) => {
    console.log('wallet', wallet);
    return wallet;
  }),
  on(
    buyCrypto,
    (state, { crypto, amount, price }: CryptoTransactionPayload) => {
      return {
        ...state,
        coins: addCryptoToWallet(state.coins || [], crypto, amount),
        balance: (state?.balance || 0) - price,
      };
    }
  ),
  on(
    sellCrypto,
    (state, { crypto, amount, price }: CryptoTransactionPayload) => {
      return {
        ...state,
        balance: (state?.balance || 0) + price,
        coins: removeCryptoFromWallet(state.coins || [], crypto, amount),
      };
    }
  )
);

function addCryptoToWallet(
  coins: WalletItem[],
  crypto: string,
  amount: number
) {
  const alreadyOwnedCrypto = coins.find(
    (coin: WalletItem) => coin.crypto === crypto
  );

  if (alreadyOwnedCrypto) {
    return coins.map((coin) =>
      coin.crypto === crypto ? { ...coin, amount: coin.amount + amount } : coin
    );
  }

  return [...coins, { crypto, amount }];
}

function removeCryptoFromWallet(
  coins: WalletItem[],
  crypto: string,
  amount: number
) {
  return coins
    .map((coin) =>
      coin.crypto === crypto ? { ...coin, amount: coin.amount - amount } : coin
    )
    .filter((coin) => Boolean(coin.amount));
}
