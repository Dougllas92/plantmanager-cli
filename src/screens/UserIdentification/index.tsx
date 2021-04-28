import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import {
  Wrapper,
  Form,
  Icon,
  Title,
  UserButton,
  UserImage,
  UserIcon,
  Input,
  Footer
} from './styles';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

import userIcon from '../../assets/user_icon.png';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [image, setImage] = useState<string>();

  const navigation = useNavigation();

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

  function chooseFromLibrary() {
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropping: true
    }).then(image => {
      setImage(image.path);
    });
  }

  async function handleNavigateToConfirmation() {
    if (!name)
      return Alert.alert('Me diz como podemos chamar você 😢');


    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantsSelect'
      });
    } catch {
      Alert.alert('Não foi possivel salvar o seu nome. 😥');
    }
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
        <SizedBox height={24} width={0} />

        <UserButton onPress={chooseFromLibrary}>
          <UserImage source={!!image ? { uri: image } : userIcon} />
          <UserIcon />
        </UserButton>

        <SizedBox height={24} width={0} />
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
            disabled={!name}
            onPress={handleNavigateToConfirmation}
          />
        </Footer>
      </Form>
    </Wrapper>
  )
}