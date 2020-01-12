import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import Language from 'src/resources/i18n';
import colors from 'src/resources/theme/colors';
import styles from './styles';

interface SearchButtonProps {
  containerStyle?: ViewStyle;
  onPress?(): void;
}

const SearchButton = ({containerStyle, onPress}: SearchButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={styles.button}>
        <Icon name="search" size={18} color={colors.ceriseRed} />
        <Text style={styles.text}>{Language.searchFavorite}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchButton;
