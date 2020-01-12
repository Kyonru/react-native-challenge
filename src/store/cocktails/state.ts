import {CocktailsState} from 'src/@types/store';
import {Cocktail} from '../../@types/cocktails';

export class CocktailInitialState implements CocktailsState {
  constructor(
    public loading: boolean = false,
    public cocktails: Cocktail[] = [],
    public search: string = '',
  ) {}
}
