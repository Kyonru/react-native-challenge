import React from 'react';
import {View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import SearchHeader from 'src/containers/search-header';
import Cocktails from 'src/containers/cocktails';
import GradientContainer from 'src/components/gradient-container';
import colors from 'src/resources/theme/colors';
import {popBack} from 'src/navigation/helper';

import styles from './styles';

const CocktailListScreen = (props: {navigation: NavigationStackProp}) => (
  <GradientContainer
    fullscreen={false}
    containerStyle={styles.container}
    hideStatusBar
    statusBarBackgroundColor={colors.white}
    barStyle="dark-content"
    gradientColors={[colors.redViolet, colors.cinnabar]}>
    <View style={styles.content}>
      <SearchHeader onBackPress={() => popBack(props.navigation)} />
      <Cocktails />
    </View>
  </GradientContainer>
);

export default CocktailListScreen;
