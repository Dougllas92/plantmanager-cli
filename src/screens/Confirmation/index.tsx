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
      <SizedBox height={60} width={0} />
      <Title>
        Prontinho
      </Title>
      <SizedBox height={16} width={0} />
      <SubTitle>
        Agora vamos começar a cuidar da suas {'\n'}
          plantinhas com muito cuidado.
        </SubTitle>
      <SizedBox height={40} width={0} />

      <Footer>
        <Button
          title="Começar"
        />
      </Footer>
    </Wrapper>
  )
}