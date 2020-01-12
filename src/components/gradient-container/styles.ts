import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

export interface HomeStyles {
  container: ViewStyle;
  linearGradient: ViewStyle;
}

export default StyleSheet.create<HomeStyles>({
  container: {flex: 1},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
