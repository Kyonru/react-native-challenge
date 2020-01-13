import {StyleSheet, ViewStyle, Platform, TextStyle} from 'react-native';
import colors from 'src/resources/theme/colors';

export interface SearchHeaderComponentStyles {
  container: ViewStyle;
  rightButton: ViewStyle;
  leftButton: ViewStyle;
  button: ViewStyle;
  inputContainer: ViewStyle;
  searchIcon: ViewStyle;
  input: TextStyle;
  cancelButton: TextStyle;
}

export default StyleSheet.create<SearchHeaderComponentStyles>({
  container: {
    paddingTop: 20,
    padding: 8,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {marginTop: 20},
  rightButton: {
    paddingVertical: 8,
    paddingLeft: 8,
    marginLeft: 8,
  },
  leftButton: {
    paddingVertical: 8,
    paddingRight: 8,
    marginRight: 8,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    borderRadius: 6,
    padding: Platform.OS === 'android' ? 4 : 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.cinnabar,
    borderRadius: 6,
    padding: 0,
    margin: 0,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  cancelButton: {
    color: colors.cinnabar,
  },
});
