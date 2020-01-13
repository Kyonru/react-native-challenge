import {StyleSheet, ViewStyle, Platform} from 'react-native';
import colors from 'src/resources/theme/colors';

export interface GradientContainerStyles {
  container: ViewStyle;
  linearGradient: ViewStyle;
  statusBar: ViewStyle;
}

export default StyleSheet.create<GradientContainerStyles>({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 16,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: colors.white,
  },
});
