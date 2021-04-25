import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Alert, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import {
  Wrapper,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  CardTipContainer,
  CardTipImage,
  CardTipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
  Container
} from './styles';

import { SvgFromUri } from 'react-native-svg';

import { Button } from '../../components/Button';
import { SizedBox } from '../../components/SizedBox';

import waterdrop from '../../assets/waterdrop.png';
import { loadPlants, PlantProps, savePlant } from '../../libs/storage';

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSelectDateTime] = useState(new Date);
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;


  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime)
      setSelectDateTime(dateTime);
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
    } catch {
      Alert.alert('Não foi possivel salvar. 😥');
    }
  }

  return (
    <Wrapper
      showsVerticalScrollIndicator={false}
    >
      <Container>

        <PlantInfo>
          <SvgFromUri
            uri={plant.photo}
            height={180}
            width={180}
          />

          <PlantName>{plant.name}</PlantName>

          <SizedBox height={16} />
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>

        <SizedBox height={32} />
        <Controller>
          <CardTipContainer>
            <CardTipImage source={waterdrop} />

            <SizedBox width={24} />
            <CardTipText>{plant.water_tips}</CardTipText>
          </CardTipContainer>

          <AlertLabel>
            Ecolha o melhor horário para ser lembrado:
        </AlertLabel>

          <SizedBox height={30} />
          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
          )}
          {
            Platform.OS === 'android' && (
              <DateTimePickerButton onPress={handleOpenDatetimePickerForAndroid}>
                <DateTimePickerText>
                  {`Mudar alarme ${format(selectedDateTime, 'HH:mm')}`}
                </DateTimePickerText>
              </DateTimePickerButton>
            )
          }
          <SizedBox height={30} />
          <Button title='Cadastrar planta' onPress={handleSave} />
          <SizedBox height={20} />
        </Controller>
      </Container>
    </Wrapper>
  )
}