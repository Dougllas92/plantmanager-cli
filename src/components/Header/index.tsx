import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  CardHeader,
  CardGeet,
  Geetings,
  Username,
  Image,
  ImageButton
} from './styles';

import userIcon from '../../assets/user_icon.png';

export function Header() {
  const [userName, setUserName] = useState<string>();
  const [userImage, setUserImage] = useState<string>();

  const navigation = useNavigation();

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user');
    const image = await AsyncStorage.getItem('@plantmanager:user_image');

    setUserName(user || '');
    setUserImage(image || '');
  }

  function navigateToPerfil() {
    navigation.navigate('UserIdentification');
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
      <ImageButton onPress={navigateToPerfil}>
        <Image source={!!userImage ? { uri: userImage } : userIcon} />
      </ImageButton>
    </CardHeader>
  )
}