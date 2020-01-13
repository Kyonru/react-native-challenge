import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import HomeScreen from 'src/screens/home';
import CocktailListScreen from 'src/screens/cocktail-list';
import {ScreenName} from 'src/navigation/screens';

const AppNavigator = createStackNavigator(
  {
    [ScreenName.home]: {
      screen: HomeScreen,
    },
    [ScreenName.cocktailList]: {
      screen: CocktailListScreen,
    },
  },
  {
    initialRouteName: ScreenName.home,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
