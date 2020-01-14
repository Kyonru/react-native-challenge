import {StyleSheet, ViewStyle} from 'react-native';

export interface CocktailListContainerStyles {
  container: ViewStyle;
  loadingIndicator: ViewStyle;
}

export default StyleSheet.create<CocktailListContainerStyles>({
  container: {paddingHorizontal: 0},
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    paddingVertical: 20,
    zIndex: 999,
  },
});
