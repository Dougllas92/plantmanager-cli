import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Wrapper, Load } from './styles';
import { useNavigation } from '@react-navigation/core';

import Logo from '../../assets/logo_plantmanager.svg';
import LoadIcon from '../../assets/load-circle.json';
import { SizedBox } from '../../components/SizedBox';

export function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      async function fetchUsername() {
        const checkUser = await AsyncStorage.getItem('@plantmanager:user');

        if (checkUser !== null) {
          navigation.reset({ routes: [{ name: 'PlantsSelect' }] });
        } else {
          navigation.reset({ routes: [{ name: 'Welcome' }] });
        }
      }
      fetchUsername();
    }, 1300);
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