import { createFeatureSelector, createSelector } from '@ngrx/store';
import Crypto from 'src/app/models/crypto';

export const selectOneById = (index: Number) =>
  createSelector(createFeatureSelector('cryptos'), (state: Crypto[]) => {
    return state.filter((x: Crypto) => x.id == new Number(index));
  });

export const selectAll = () =>
  createSelector(createFeatureSelector('cryptos'), (state: Crypto[]) => {
    return state;
  });
