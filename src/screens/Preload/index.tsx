import React, { useEffect } from 'react';
import { Wrapper, Load } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from '../../assets/logo_plantmanager.svg';
import LoadIcon from '../../assets/load-circle.json';
import { SizedBox } from '../../components/SizedBox';
import { useNavigation } from '@react-navigation/core';

export function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchUsername() {
      const checkUser = await AsyncStorage.getItem('@plantmanager:user');

      if (checkUser !== null) {
        navigation.navigate('PlantsSelect');
      } else {
        navigation.navigate('Welcome');
      }
    }

    fetchUsername();

  }, []);

  return (
    <Wrapper>

      <SizedBox height={55} />
      <Logo width="220" height="124" />
      <Load
        source={LoadIcon}
        autoPlay
        loop
      />
    </Wrapper>
  )
}