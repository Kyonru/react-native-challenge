import React from 'react';
import {SafeAreaView, StatusBar, ViewStyle, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from 'src/resources/theme/colors';
import styles from './styles';

interface GradientContainerProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  gradientColors?: string[];
  barStyle?: 'dark-content' | 'default' | 'light-content' | undefined;
  hideStatusBar?: boolean;
  fullscreen?: boolean;
  statusBarBackgroundColor?: string;
}

const GradientBackground = ({
  colors,
  children,
  style,
}: {
  style?: ViewStyle;
  colors: string[];
  children: React.ReactNode;
}) => (
  <LinearGradient
    useAngle
    angle={45}
    angleCenter={{x: 0.5, y: 0.5}}
    colors={colors}
    style={StyleSheet.flatten([styles.linearGradient, style])}>
    {children}
  </LinearGradient>
);

const GradientContainer = ({
  gradientColors = [colors.cinnabar, colors.redViolet],
  barStyle = 'light-content',
  containerStyle,
  fullscreen = true,
  statusBarBackgroundColor,
  children,
}: GradientContainerProps) => {
  return (
    <>
      <StatusBar
        animated
        barStyle={barStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      {fullscreen ? (
        <GradientBackground colors={gradientColors} style={containerStyle}>
          <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </GradientBackground>
      ) : (
        <SafeAreaView
          style={StyleSheet.flatten([
            styles.container,
            {backgroundColor: colors.white},
          ])}>
          <GradientBackground colors={gradientColors} style={containerStyle}>
            {children}
          </GradientBackground>
        </SafeAreaView>
      )}
    </>
  );
};

export default GradientContainer;
