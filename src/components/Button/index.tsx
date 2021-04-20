import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Btn,
  ButtonText
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <Btn>
      <ButtonText>
        {title}
      </ButtonText>
    </Btn>
  )
}