import React from 'react';
import {View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import Logo from 'src/components/logo';
import GradientContainer from 'src/components/gradient-container/index';

import SearchButton from 'src/components/buttons/search';
import {openCocktailSearchScreen} from 'src/navigation/screens';
import {witDebounce} from 'src/utils/timers';
import styles from './styles';
import colors from 'src/resources/theme/colors';

const Home = (props: {navigation: NavigationStackProp}) => {
  return (
    <GradientContainer statusBarBackgroundColor={colors.redViolet}>
      <View style={styles.container}>
        <Logo />
        <SearchButton
          onPress={witDebounce(() =>
            openCocktailSearchScreen(props.navigation),
          )}
          containerStyle={styles.button}
        />
      </View>
    </GradientContainer>
  );
};

export default Home;
