import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from 'src/resources/theme/colors';

export interface LogoStyles {
  container: ViewStyle;
  name: TextStyle;
  cocktail: TextStyle;
}

export default StyleSheet.create<LogoStyles>({
  container: {alignItems: 'center'},
  name: {fontSize: 24, color: colors.white, fontWeight: '300'},
  cocktail: {fontWeight: 'bold'},
});
