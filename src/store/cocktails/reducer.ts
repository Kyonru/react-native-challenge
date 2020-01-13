import {CocktailsState, StoreAction} from 'src/@types/store';
import {ReducerActionMapper} from 'src/store/utils';

import {CocktailInitialState} from './state';
import {CocktailsType} from './types';
import {
  FETCH_COCKTAILS,
  SET_COCKTAILS,
  SET_SEARCH_TERM,
} from 'src/store/cocktails/types';

const INITIAL_STATE = new CocktailInitialState();
const mapActionToReducer = new ReducerActionMapper<CocktailsState>();

mapActionToReducer.add(FETCH_COCKTAILS, state => ({
  ...state,
  loading: true,
}));

mapActionToReducer.add(SET_COCKTAILS, (state, cocktails) => ({
  ...state,
  cocktails,
  loading: false,
}));

mapActionToReducer.add(SET_SEARCH_TERM, (state, searchTerm) => ({
  ...state,
  search: searchTerm,
}));

export default function cocktailsReducer(
  state: CocktailsState = INITIAL_STATE,
  action: StoreAction<CocktailsType>,
): CocktailsState {
  return mapActionToReducer.mapAction(action.type, state, action.payload);
}
