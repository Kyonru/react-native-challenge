import {Dispatch} from 'redux';
import {
  CocktailsActions,
  FETCH_COCKTAILS,
  FetchCocktails,
} from 'src/store/cocktails/types';
import {createReduxAction} from 'src/store/utils';
import {getCocktails} from 'src/services/api/sources/cocktails';
import {Cocktail} from 'src/@types/cocktails';
import {
  SetCocktails,
  SET_COCKTAILS,
  SetSearchTerm,
  SET_SEARCH_TERM,
} from 'src/store/cocktails/types';

export function getCocktailList(searchTerm: string) {
  return async (dispatch: Dispatch<CocktailsActions>): Promise<Cocktail[]> => {
    try {
      dispatch(createReduxAction<FetchCocktails>(FETCH_COCKTAILS));
      const cocktails = await getCocktails(searchTerm);
      dispatch(createReduxAction<SetCocktails>(SET_COCKTAILS, cocktails));
      return cocktails;
    } catch (e) {
      // TODO: set error
      return [];
    }
  };
}

export function startLoading() {
  return async (
    dispatch: Dispatch<CocktailsActions>,
  ): Promise<FetchCocktails> => {
    return dispatch(createReduxAction<FetchCocktails>(FETCH_COCKTAILS));
  };
}

export function setSearchTerm(searchTerm: string) {
  return async (dispatch: Dispatch<CocktailsActions>): Promise<string> => {
    try {
      dispatch(createReduxAction<SetSearchTerm>(SET_SEARCH_TERM, searchTerm));
      return searchTerm;
    } catch (e) {
      // TODO: set error
      return '';
    }
  };
}
