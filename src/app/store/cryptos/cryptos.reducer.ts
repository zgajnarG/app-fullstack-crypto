import { createReducer ,on} from '@ngrx/store';
import {addCrypto, addCryptos} from './cryptos.actions';
import Crypto  , {CryptoList} from 'src/app/models/crypto';

export const initialState : Crypto[]  = [];

export const cryptoReducer = createReducer(
  initialState,
  on(addCrypto, (state :Crypto[] , crypto : Crypto) => {
     if(!state.some( (x :Crypto ) => x.id === crypto.id)){
        return [...state , crypto];
     }
     return state;
  }),
  on(addCryptos, (state :Crypto[] , cryptos : CryptoList) =>{
    const newList : Crypto[] = [...state];
    const newCryptos : Crypto[] = cryptos.cryptos;
    newCryptos.forEach( (x :Crypto) => {
      if(!state.some( (y :Crypto ) => y.id === x.id)){
        newList.push(x);
      };
    });
    return newList;
  })
);
