import React from 'react';
import LottieView from 'lottie-react-native';

import { Wrapper } from './styles';

import loadAnimation from '../../assets/load.json';

export function Load() {
  return (
    <Wrapper>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{
          backgroundColor: 'transparent',
          width: 200,
          height: 200
        }}
      />
    </Wrapper>
  )
}