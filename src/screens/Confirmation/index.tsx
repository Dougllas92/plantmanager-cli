import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import {
  Wrapper,
  Icon,
  Title,
  SubTitle,
  Footer
} from './styles';

import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';

interface Params {
  title: string,
  subtitle: string,
  buttonTitle: string,
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function navigateToPlantsSelect() {
    navigation.navigate(nextScreen);
  }

  return (
    <Wrapper>
      <Icon>{emojis[icon]}</Icon>
      <SizedBox height={60} />
      <Title>{title}</Title>
      <SizedBox height={16} />

      <SubTitle>{subtitle}</SubTitle>
      <SizedBox height={40} />

      <Footer>
        <Button
          title={buttonTitle}
          onPress={navigateToPlantsSelect}
        />
      </Footer>

    </Wrapper>
  )
}