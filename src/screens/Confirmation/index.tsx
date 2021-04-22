import React from 'react';

import {
  Wrapper,
  Icon,
  Title,
  SubTitle,
  Footer
} from './styles';

import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';

export function Confirmation() {
  return (
    <Wrapper>
      <Icon>😄</Icon>
      <SizedBox height={60} />
      <Title>
        Prontinho
      </Title>
      <SizedBox height={16} />
      <SubTitle>
        Agora vamos começar a cuidar da suas {'\n'}
          plantinhas com muito cuidado.
        </SubTitle>
      <SizedBox height={40} />

      <Footer>
        <Button
          title="Começar"
        />
      </Footer>
    </Wrapper>
  )
}