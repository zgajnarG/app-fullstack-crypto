export default interface Crypto {
  id: Number;
  name: String;
  abbreviation: String;
  eur_price: Number;
  image: String;
}


export interface CryptoList{
  cryptos: Crypto[];
}
