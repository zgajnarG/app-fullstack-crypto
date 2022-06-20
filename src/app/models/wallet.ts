export interface Wallet {
  balance?: Number;
  userId?: Number;
  coins?: WalletItem[];
}

export interface WalletItem {
  crypto: String;
  amount: Number;
}
