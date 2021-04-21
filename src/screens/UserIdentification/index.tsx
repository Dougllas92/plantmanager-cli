import React, { useState } from 'react';

import {
  Wrapper,
  Form,
  Icon,
  Title,
  Input,
  Footer
} from './styles';

import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleFocused() {
    setIsFocused(true);

  }

  function handleBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleChange(value: string) {
    setIsFilled(!!value)
    setName(value);
  }

  return (
    <Wrapper>
      <Form>
        <Icon>
          {isFilled ? '😄' : '😀'}</Icon>
        <SizedBox height={24} width={0} />
        <Title>
          Como podemos {'\n'}
          chamar você?
        </Title>
        <SizedBox height={40} width={0} />

        <Input
          style={{
            borderColor: (isFocused || isFilled) ? theme.colors.green : theme.colors.gray
          }}
          placeholder='Digite um nome'
          onFocus={handleFocused}
          onBlur={handleBlur}
          onChangeText={handleChange}

        />

        <SizedBox height={40} width={0} />
        <Footer>
          <Button
            title="Confirmar"
          />
        </Footer>
      </Form>
    </Wrapper>
  )
}