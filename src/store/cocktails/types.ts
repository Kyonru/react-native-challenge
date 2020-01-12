import {StoreAction} from 'src/@types/store';

export const FETCH_COCKTAILS = 'store.cocktails.fetch';

export type CocktailsType = typeof FETCH_COCKTAILS;

export type CocktailsActionsActions = FetchCocktails;

export interface FetchCocktails extends StoreAction<CocktailsType> {
  type: typeof FETCH_COCKTAILS;
  payload: any;
}
