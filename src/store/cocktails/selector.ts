import {createSelector} from 'reselect';
import {cocktailStoreSelector} from 'src/store/selectors';

export const getCocktailList = createSelector(
  cocktailStoreSelector,
  store => store.cocktails || [],
);

export const getSearchTerm = createSelector(
  cocktailStoreSelector,
  store => store.search || '',
);

export const isCocktailListLoading = createSelector(
  cocktailStoreSelector,
  store => store.loading || false,
);
