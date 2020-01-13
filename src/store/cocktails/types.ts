import {StoreAction} from 'src/@types/store';
import {Cocktail} from 'src/@types/cocktails';

export const FETCH_COCKTAILS = 'store.cocktails.list.fetch';
export const SET_COCKTAILS = 'store.cocktails.list.set';
export const SET_SEARCH_TERM = 'store.cocktails.search.set';

export type CocktailsType =
  | typeof FETCH_COCKTAILS
  | typeof SET_COCKTAILS
  | typeof SET_SEARCH_TERM;

export type CocktailsActions = FetchCocktails | SetCocktails | SetSearchTerm;

export interface FetchCocktails extends StoreAction<CocktailsType> {
  type: typeof FETCH_COCKTAILS;
}

export interface SetCocktails extends StoreAction<CocktailsType> {
  type: typeof SET_COCKTAILS;
  payload: Cocktail[];
}

export interface SetSearchTerm extends StoreAction<CocktailsType> {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}
