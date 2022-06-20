import { ActionReducer, combineReducers } from '@ngrx/store';
import User from '../models/user';
import * as fromUser from './user/user.reducer';


export interface State {
  user:User;
}

const reducers = {
  user: fromUser.reducer
};


export const reducer: ActionReducer<State> = combineReducers(reducers);

