import React from 'react';
import {View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import Logo from 'src/components/logo';
import GradientContainer from 'src/components/gradient-container/index';

import styles from './styles';
import SearchButton from 'src/components/buttons/search';
import {openCocktailSearchScreen} from 'src/navigation/screens';

const App = (props: {navigation: NavigationStackProp}) => {
  return (
    <GradientContainer>
      <View style={styles.container}>
        <Logo />
        <SearchButton
          onPress={() => openCocktailSearchScreen(props.navigation)}
          containerStyle={styles.button}
        />
      </View>
    </GradientContainer>
  );
};

export default App;
