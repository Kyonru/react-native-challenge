import {CocktailsState, Store} from 'src/@types/store';

const storeSelector = <T>(storeName: string, state: Store): T => {
  return (state[storeName] || {}) as T;
};

export const cocktailStoreSelector = (state: Store) =>
  storeSelector<CocktailsState>('cocktails', state);
