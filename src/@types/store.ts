import {Cocktail} from './cocktails';

export interface Store {
  [key: string]: any;
  cocktails: CocktailsState;
}

export interface StoreAction<T> {
  readonly type: T;
  payload?: any;
}

export interface CocktailsState {
  loading: boolean;
  cocktails: Cocktail[];
  search: string;
}

export type StoreReducerAction<T> = {
  [key: string]: (state: T, payload?: any) => T;
};
