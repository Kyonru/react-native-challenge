import React from 'react';
import {Image, View, Text} from 'react-native';

import {Cocktail} from 'src/@types/cocktails';
import styles from './styles';

export default (props: Cocktail) => (
  <View style={styles.container}>
    <Image source={{uri: props.imageUrl}} style={styles.image} />
    <Text style={styles.name}>{props.name}</Text>
  </View>
);
