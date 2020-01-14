import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from 'src/resources/theme/colors';

export interface LogoStyles {
  container: ViewStyle;
  firstRender: ViewStyle;
  icon: ViewStyle;
  text: TextStyle;
  term: TextStyle;
}

export default StyleSheet.create<LogoStyles>({
  container: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: colors.white, fontSize: 20, width: '75%', textAlign: 'center'},
  term: {fontStyle: 'italic'},
  firstRender: {alignItems: 'center'},
  icon: {paddingBottom: 8},
});
