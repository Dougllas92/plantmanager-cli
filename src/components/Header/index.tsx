import React, { useEffect, useState } from 'react';
import {
  CardHeader,
  CardGeet,
  Geetings,
  Username,
  Image
} from './styles';

import userIcon from '../../assets/user_icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
  const [userName, setUserName] = useState<string>();
  const [userImage, setUserImage] = useState<string>();

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user');
    const image = await AsyncStorage.getItem('@plantmanager:user_image');

    setUserName(user || '');
    setUserImage(image || '');
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
      <Image source={!!userImage ? { uri: userImage } : userIcon} />
    </CardHeader>
  )
}