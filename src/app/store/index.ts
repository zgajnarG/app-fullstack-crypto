import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./user/user.reducer";
import { cryptoReducer } from "./cryptos/cryptos.reducer";

export const reducers: ActionReducerMap<any> = {
  users: userReducer,
  cryptos: cryptoReducer
};
