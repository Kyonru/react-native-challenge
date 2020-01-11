import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'src/screens/home';
import ResultListScreen from 'src/screens/result-list';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ResultList: {
      screen: ResultListScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
