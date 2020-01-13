import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import colors from 'src/resources/theme/colors';

export interface CocktailItemStyles {
  container: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
}

export default StyleSheet.create<CocktailItemStyles>({
  container: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: colors.black,
  },
});
