import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { loadPlants, PlantProps, removePlant } from '../../libs/storage';
import { Alert } from 'react-native';

import {
  Wrapper,
  Spot,
  SpotImage,
  SpotText,
  Plants,
  PlantsTitle,
  PlantsFlat,
  Mensagem,
  MsgIcon,
  MsgTitle
} from './styles';

import waterdrop from '../../assets/waterdrop.png';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';
import { SizedBox } from '../../components/SizedBox';
import { Modal } from '../../components/Modal';

interface modalProps {
  id: string;
  name: string;
  photo: string;
}


export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPlant, setModalPlant] = useState<modalProps>({ id: '', name: '', photo: '' });

  async function loadStorageData() {
    const plantsStoraged = await loadPlants();

    if (plantsStoraged.length === 0)
      return setLoading(false);

    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: ptBR }
    );

    setNextWatered(
      `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
    )

    setMyPlants(plantsStoraged);
    setLoading(false);
  }

  async function handleModal(plant: PlantProps) {
    setModalPlant(plant);
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleRemovePlant(plant: string) {
    try {
      await removePlant(plant);

      setMyPlants((oldData) =>
        oldData.filter((item) => item.id !== plant)
      );

      setModalVisible(false);
    } catch (error) {
      Alert.alert('Não foi possivel remover! 😥');
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  if (loading)
    return <Load />

  return (
    <Wrapper>
      <SizedBox height={50} />
      <Header />

      <SizedBox height={40} />

      {!!nextWatered
        ?
        <>
          <Spot>
            <SpotImage source={waterdrop} />
            <SpotText>{nextWatered}</SpotText>
          </Spot>

          <SizedBox height={40} />
          <Plants>
            <PlantsTitle>Próximas regadas</PlantsTitle>

            <SizedBox height={16} />
            <PlantsFlat
              data={myPlants}
              //@ts-ignore
              keyExtractor={(item) => String(item.id)}
              //@ts-ignore
              renderItem={({ item }: { item: PlantProps }) => (
                <PlantCardSecondary
                  data={item}
                  handleRemove={() => handleModal(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </Plants>
        </>
        :
        <Mensagem>
          <MsgIcon>😢</MsgIcon>
          <SizedBox height={40} />
          <MsgTitle>Você ainda não possui nenhuma {'\n'} platinha cadastrada.</MsgTitle>
        </Mensagem>
      }

      <Modal
        visible={modalVisible}
        data={modalPlant}
        onRequestClose={handleCloseModal}
        handleRemovePlant={handleRemovePlant}
      />
    </Wrapper>
  )
}