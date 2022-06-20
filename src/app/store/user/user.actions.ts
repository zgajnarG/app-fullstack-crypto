import { Action } from '@ngrx/store';
import User from '../../models/user';

export const LOGIN ='[User] login';
export const DISCONNECT = '[User] disconnect ';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) { }
}

export class DisconnectAction implements Action {
  readonly type = DISCONNECT;

  constructor() { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoginAction
  | DisconnectAction
