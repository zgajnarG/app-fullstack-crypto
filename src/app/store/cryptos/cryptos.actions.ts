import { createAction , props } from '@ngrx/store';
import Crypto , {CryptoList} from '../../models/crypto';

export const addCrypto = createAction('Add One crypto' ,  props<Crypto>());
export const addCryptos = createAction('Add multiple cryptos' ,  props<CryptoList>());
