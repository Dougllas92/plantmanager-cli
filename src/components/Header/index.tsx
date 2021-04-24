import React, { useEffect, useState } from 'react';
import {
  CardHeader,
  CardGeet,
  Geetings,
  Username,
  Image
} from './styles';

import user from '../../assets/douglas.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
  const [userName, setUserName] = useState<string>();

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user');

    setUserName(user || '');
  }


  useEffect(() => {
    loadStorageUserName();
  }, [])

  return (
    <CardHeader>
      <CardGeet>
        <Geetings>Olá,</Geetings>
        <Username>{userName}</Username>
      </CardGeet>
      <Image source={user} />
    </CardHeader>
  )
}