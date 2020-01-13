import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import colors from 'src/resources/theme/colors';
import styles from './styles';
import language from 'src/resources/i18n';

export default () => (
  <View style={styles.container}>
    <Icon name="cocktail" size={35} color={colors.white} />
    <Text style={styles.name}>
      <Text style={styles.cocktail}>{language.cocktail}</Text>
      {language.finder}
    </Text>
  </View>
);
