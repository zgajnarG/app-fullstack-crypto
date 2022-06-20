import { createFeatureSelector, createSelector } from "@ngrx/store";
import User from "src/app/models/user";



export const selectUser = createSelector(
  createFeatureSelector('users'),
  (state :User) => {
    const storageState :string | null = localStorage.getItem('user');
    if(storageState){
      return JSON.parse(storageState) as User;
    }
    return state;
  }
);
