import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: theme.colors.green_light
  },
  text: {
    color: theme.colors.heading,
    fontFamily: theme.family.text
  },
  textActive: {
    fontFamily: theme.family.heading,
    color: theme.colors.green_dark
  }
});