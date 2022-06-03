import User from 'src/app/models/user';
import * as userActions from './user.actions';


export const initialState :User = {};

export function reducer(state = initialState, action: userActions.Actions ): User {
  switch (action.type) {
    case userActions.LOGIN:
      return action.payload;
    case userActions.DISCONNECT:
      return {};
    default:
      return state;
  }
}
