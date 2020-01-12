import {createSelector} from 'reselect';
import {cocktailStoreSelector} from 'src/store/selectors';

export const getCocktailList = createSelector(
  cocktailStoreSelector,
  store => store.cocktails || [],
);
