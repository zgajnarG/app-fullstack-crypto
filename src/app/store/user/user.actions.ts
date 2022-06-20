import { createAction , props } from '@ngrx/store';
import User from '../../models/user';

export const loginUser = createAction('Login User' ,  props<User>());
export const disconnectUser = createAction('Disconnect User');
