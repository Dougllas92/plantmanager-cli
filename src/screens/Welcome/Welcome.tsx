import React from 'react';
import {
  Wrapper,
  Title,
  Image,
  Subtitle,
} from './styles';

import wateringImg from '../../assets/watering.png';
import { Button } from '../../components/Button';

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

      <Button title='>' />

    </Wrapper>
  )
}