import { createAction, props } from '@ngrx/store';
import { Wallet } from '../../models/wallet';

export const saveWallet = createAction('Save Wallet', props<Wallet>());
