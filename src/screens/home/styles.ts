import {StyleSheet, ViewStyle} from 'react-native';

export interface HomeStyles {
  container: ViewStyle;
  button: ViewStyle;
}

export default StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {marginTop: 20},
});
