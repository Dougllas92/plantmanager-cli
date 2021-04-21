import React from 'react';
import {
  Wrapper,
  Title,
  Image,
  Subtitle,
  Button
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import wateringImg from '../../assets/watering.png';
import theme from '../../styles/theme';


export function Welcome() {
  return (
    <Wrapper>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Image source={wateringImg} />

      <Subtitle>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Subtitle>

      <Button>
        <Icon name="chevron-right" size={24} color={theme.colors.white} />
      </Button>

    </Wrapper>
  )
}