import React from 'react';
import {
  CardHeader,
  CardGeet,
  Geetings,
  Username,
  Image
} from './styles';

import user from '../../assets/douglas.jpg';

export function Header() {
  return (
    <CardHeader>
      <CardGeet>
        <Geetings>Olá,</Geetings>
        <Username>Douglas</Username>
      </CardGeet>
      <Image source={user} />
    </CardHeader>
  )
}