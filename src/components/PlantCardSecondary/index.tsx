import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

import theme from '../../styles/theme';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={theme.colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >

      <RectButton
        style={styles.container}
        {...rest}
      >
        <SvgFromUri
          uri={data.photo}
          width={40}
          height={40}
        />
        <Text style={styles.title}>
          {data.name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regas às
        </Text>
          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.shape,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: theme.family.heading,
    fontSize: 17,
    color: theme.colors.heading
  },
  details: {
    alignItems: 'flex-end'
  },
  timeLabel: {
    fontSize: 17,
    fontFamily: theme.family.text,
    color: theme.colors.body_light

  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: theme.family.text,
    color: theme.colors.body_dark
  },
  buttonRemove: {
    width: 120,
    height: 85,
    backgroundColor: theme.colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 10,
  }
})