import {CocktailsState, StoreAction} from 'src/@types/store';
import {ReducerActionMapper} from 'src/store/utils';

import {CocktailInitialState} from './state';
import {CocktailsType} from './types';

const INITIAL_STATE = new CocktailInitialState();
const mapActionToReducer = new ReducerActionMapper<CocktailsState>();

export default function cocktailsReducer(
  state: CocktailsState = INITIAL_STATE,
  action: StoreAction<CocktailsType>,
): CocktailsState {
  return mapActionToReducer.mapAction(action.type, state, action.payload);
}
