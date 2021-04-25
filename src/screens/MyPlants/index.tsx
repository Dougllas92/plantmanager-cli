import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { loadPlants, PlantProps, removePlant, StoragePlantProps } from '../../libs/storage';
import { Alert } from 'react-native';

import {
  Wrapper,
  Spot,
  SpotImage,
  SpotText,
  Plants,
  PlantsTitle,
  PlantsFlat
} from './styles';

import waterdrop from '../../assets/waterdrop.png';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  async function loadStorageData() {
    const plantsStoraged = await loadPlants();

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

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`,
      [
        {
          text: "Não 🙏",
          style: 'cancel'
        },
        {
          text: "Sim 😭",
          onPress: async () => {
            try {

              await removePlant(plant.id);

              setMyPlants((oldData) =>
                oldData.filter((item) => item.id !== plant.id)
              );

            } catch (error) {
              Alert.alert('Não foi possivel remover! 😥');
            }
          }
        }
      ])

  }

  useEffect(() => {
    loadStorageData();
  }, []);

  if (loading)
    return <Load />

  return (
    <Wrapper>
      <Header />

      <Spot>
        <SpotImage source={waterdrop} />
        <SpotText>{nextWatered}</SpotText>
      </Spot>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <PlantsFlat
          data={myPlants}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
          //@ts-ignore
          renderItem={({ item }: { item: PlantProps }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Wrapper>
  )
}