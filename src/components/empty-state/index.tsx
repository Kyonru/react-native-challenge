import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from './styles';
import language from 'src/resources/i18n';
import colors from 'src/resources/theme/colors';

interface EmptyStateProps {
  firstRender: boolean;
  term: string;
}

export default (props: EmptyStateProps) => (
  <View style={styles.container}>
    {props.firstRender ? (
      <View style={styles.firstRender}>
        <Icon
          name="arrow-up"
          size={20}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.text}>{language.typeSomething}</Text>
      </View>
    ) : (
      <Text style={styles.text}>
        {language.notFound} <Text style={styles.term}>"{props.term}".</Text>
        <Text>{'\n'}:(</Text>
      </Text>
    )}
  </View>
);
