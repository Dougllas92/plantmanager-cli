import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Btn,
  ButtonText
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Btn
      {...rest}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </Btn>
  )
}