export interface Wallet {
  balance?: number;
  userId?: number;
  coins?: WalletItem[];
}

export interface WalletItem {
  crypto: string;
  amount: number;
}

export interface CryptoTransactionPayload {
  crypto: string;
  amount: number;
  price: number;
}
