import {StackActions} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';

export const popBack = (navigator: NavigationStackProp, by = 1) => {
  navigator.dispatch(
    StackActions.pop({
      n: by,
    }),
  );
};
