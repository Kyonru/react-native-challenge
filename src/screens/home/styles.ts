import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface HomeStyles {
  scrollView: ViewStyle;
  engine: ViewStyle;
  body: ViewStyle;
  sectionContainer: ViewStyle;
  sectionTitle: TextStyle;
  sectionDescription: TextStyle;
  highlight: TextStyle;
  footer: ViewStyle;
  linearGradient: ViewStyle;
}

export default StyleSheet.create<HomeStyles>({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
