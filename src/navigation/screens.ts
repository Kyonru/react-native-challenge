import {StackActions, NavigationActions} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {debounce} from 'src/utils/timers';

export enum ScreenName {
  home = 'Home',
  cocktailList = 'CocktailList',
}

export const openCocktailSearchScreen = (
  navigator: NavigationStackProp,
  key: string = ScreenName.cocktailList,
) => {
  navigator.dispatch(
    StackActions.push({
      routeName: ScreenName.cocktailList,
    }),
  );
};
