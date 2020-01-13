import {StyleSheet, ViewStyle} from 'react-native';

export interface CocktailScreenStyles {
  container: ViewStyle;
  content: ViewStyle;
}

export default StyleSheet.create<CocktailScreenStyles>({
  container: {paddingHorizontal: 0},
  content: {flex: 1},
});
