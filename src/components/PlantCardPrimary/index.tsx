import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import theme from '../../styles/theme';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={60}
        height={90}
      />
      <Text style={styles.text}>
        {data.name}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: theme.colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: theme.colors.green_dark,
    fontFamily: theme.family.heading,
    marginVertical: 16
  }
})