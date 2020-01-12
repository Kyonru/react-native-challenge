import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import colors from 'src/resources/theme/colors';

export interface HomeStyles {
  container: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<HomeStyles>({
  container: {
    width: '100%',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {alignSelf: 'center', flex: 1, textAlign: 'center'},
});
