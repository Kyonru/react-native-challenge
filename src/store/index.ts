import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import cocktailsReducer from './cocktails/reducer';
import {Store} from 'src/@types/store';

export const reducers = combineReducers<Store>({
  cocktails: cocktailsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
