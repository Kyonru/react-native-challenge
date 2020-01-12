import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from 'src/resources/theme/colors';
import styles from './styles';

interface GradientContainerProps {
  children: React.ReactNode;
  gradientColors?: string[];
  barStyle?: 'dark-content' | 'default' | 'light-content' | undefined;
}

const GradientContainer = ({
  gradientColors = [colors.cinnabar, colors.redViolet],
  barStyle = 'light-content',
  children,
}: GradientContainerProps) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <LinearGradient
        useAngle
        angle={45}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={gradientColors}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default GradientContainer;
