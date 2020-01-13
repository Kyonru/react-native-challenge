import {StackActions} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';

export enum ScreenName {
  home = 'Home',
  cocktailList = 'CocktailList',
}

export const openCocktailSearchScreen = (navigator: NavigationStackProp) => {
  navigator.dispatch(
    StackActions.push({
      routeName: ScreenName.cocktailList,
    }),
  );
};
