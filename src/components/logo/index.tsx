import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import colors from 'src/resources/theme/colors';

export default () => (
  <View style={{alignItems: 'center'}}>
    <Icon name="cocktail" size={35} color={colors.white} />
    <Text style={{fontSize: 24, color: colors.white, fontWeight: '300'}}>
      <Text style={{fontWeight: 'bold'}}>Cocktail</Text>
      Finder
    </Text>
  </View>
);
