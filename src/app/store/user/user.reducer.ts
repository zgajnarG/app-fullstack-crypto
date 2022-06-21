import { createReducer ,on} from '@ngrx/store';
import User from 'src/app/models/user';
import {disconnectUser,loginUser} from './user.actions';


export const initialState : User  = {isAuthenticated : false};

export const userReducer = createReducer(
  initialState,
  on(disconnectUser, _ => {
    localStorage.removeItem('user');
    return {isAuthenticated : false};
  } ),
  on(loginUser, (state, user : User) => {
    const data = { id : user.id , email : user.email , isAuthenticated : true};
    localStorage.setItem('user', JSON.stringify(data));
    return { id : user.id , email : user.email , isAuthenticated : true};
  })
);
