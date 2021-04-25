import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Form,
  Icon,
  Title,
  Input,
  Footer
} from './styles';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

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
            onPress={handleNavigateToConfirmation}
          />
        </Footer>
      </Form>
    </Wrapper>
  )
}